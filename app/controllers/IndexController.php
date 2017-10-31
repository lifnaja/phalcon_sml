<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {
        $test = Test::findFirst(
            [
                [
                    "item" => "card",
                ]
            ]
        );
       
        $this->view->test = $test;
    }

}

