<?php

class TaskController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {

    }


    public function createAction()
    {

    }


    public function saveAction()
    {
        $this->view->disable();
        
        $name = $this->request->getPost('name');

        $task = new Task();

        $task->name = $name;

        $task->save();
        
        return $this->response->redirect("index");
    }

    public function checkDupAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('name');

        $condition = [];
        
        if($input){
            $condition["name"] = $input;
        }

        $task = Task::Find(array($condition));
        if($task){
            $test=0;
        }else{
            $test=1;
        }
        return json_encode($test);
    }


    

}

