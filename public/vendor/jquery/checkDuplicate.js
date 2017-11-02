  $(document).ready(function() {
    
                //task
                    $('#savetask').click(function(){
                            var input = $("#name").val();
                            $.post("checkDup",{    
                                name: input
                            }, function(data){
                                console.log(data);
                               if(data == 0){
                                    alert("cannot save");
                               }else{
                                    alert("save");
                                    savetask();
                               }
                            },  "json");
                    });


                    function savetask(){
                        var name = $("#name").val();
                        // var isA = $("#isA").val();
                        // var Description = $("#Description").val();
                        // var includes = $("#includes").val();
                        // var asIsState = $("#asIsState").val();
                        // var owner = $("#owner").val();
                        $.post("save",{    
                            name: name
                        }, function(data){
                        });
                        window.location.replace("");
                    }

                //ข้างล่างยังไม่เสร็จ <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                //user 
                    $('#saveuser').click(function(){
                        var host = window.location.host;
                        var input = $("#name").val();
                        $.post(host+"/user/checkDup",{    
                            name: input
                        }, function(data){
                            console.log(data);
                           if(data == 0){
                                alert("cannot save");
                           }else{
                               alert("save it");
                           }
                        },  "json");
                     });

                     
                    function saveuser(){
                        var name = $("#name").val();


                    }


                //project    
                    $('#saveproject').click(function(){
                        var host = window.location.host;
                        var input = $("#name").val();
                        $.post(host+"/project/checkDup",{    
                            name: input
                        }, function(data){
                            console.log(data);
                        if(data == 0){
                                alert("cannot save");
                        }else{
                            alert("save it");
                        }
                        },"json");
                    });

                    function saveproject(){
                        var name = $("#name").val();


                    }



                //resource
                    $('#saveres').click(function(){
                        var host = window.location.host;
                        var input = $("#name").val();
                        $.post(host+"/resouece/checkDup",{    
                            name: input
                        }, function(data){
                            console.log(data);
                        if(data == 0){
                                alert("cannot save");
                        }else{
                            alert("save it");
                        }
                        },"json");
                    });

                    function saveresource(){
                        var name = $("#name").val();


                    }
                


                //stakeholder    
                    $('#savestake').click(function(){
                        var host = window.location.host;
                        var input = $("#name").val();
                        $.post(host+"/stakeholder/checkDup",{    
                            name: input
                        }, function(data){
                            console.log(data);
                        if(data == 0){
                                alert("cannot save");
                        }else{
                            alert("save it");
                        }
                        },  "json");
                    });


                    function savestake(){
                        var name = $("#name").val();


                    }
});