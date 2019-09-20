<?php

namespace ApiBundle\Api\Resource\Course;

use ApiBundle\Api\Resource\Filter;
use ApiBundle\Api\Resource\Homework\HomeworkFilter;

class CourseTaskMediaFilter extends Filter
{
    protected $publicFields = array(
        'mediaType', 'media',
    );

    protected function publicFields(&$data)
    {
        switch ($data['mediaType']) {
            case 'homework':

                $homeworkFilter = new HomeworkFilter();
                $homeworkFilter->filter($data['media']);
                $data['media']['description'] = $this->convertAbsoluteUrl($data['media']['description']);
                $data['homework'] = $data['media'];
                unset($data['media']);
                break;

            case 'text':

                $data['media']['content'] = $this->convertAbsoluteUrl($data['media']['content']);
                break;

            case 'audio':

                $data['media']['text'] = $this->convertAbsoluteUrl($data['media']['text']);
                break;

            case 'download':

                // /api/courses/{courseId}/task_medias/{taskId}接口 为App/微网校提供 "获取教学任务" 的功能
                // 由于 Android 端语言规范，需要12种类型返回出去的 media key 不一样(因为里面字段也不一样)
                $data['downloadMedia'] = $data['media'];
                unset($data['media']);
                break;

            default:
                break;
        }
    }
}
