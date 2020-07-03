<?php

namespace Biz\ItemBankExercise\Dao;

use Codeages\Biz\Framework\Dao\AdvancedDaoInterface;

interface AssessmentExerciseDao extends AdvancedDaoInterface
{
    public function findByModuleId($moduleId);

    public function findByExerciseIdAndModuleId($exerciseId, $moduleId);

    public function isAssessmentExercise($moduleId, $assessmentId, $exerciseId);
}
