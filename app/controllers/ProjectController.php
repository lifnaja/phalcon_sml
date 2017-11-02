<?php

class ProjectController extends \Phalcon\Mvc\Controller
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
        
        $name = $this->request->getPost('projectname');

        $project = new Project();

        $project->name = $name;

        $project->save();
        
        return $this->response->redirect("index");
    }
    public function checkDupAction()
    {
        $this->view->disable();
        $input = $this->request->getPost('projectname');

        $condition = [];
        
        if($input){
            $condition["name"] = $input;
        }

        $project = Project::Find(array($condition));
        if($project){
            $project=0;
        }else{
            $project=1;
        }
        return json_encode($project);
    }

}

