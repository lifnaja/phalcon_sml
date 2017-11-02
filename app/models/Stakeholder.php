<?php 
use Phalcon\Mvc\Collection;  


class stakeholder extends Collection { 
   public function initialize() { 
      $this->setSource("stakeholder"); 
   } 
}
