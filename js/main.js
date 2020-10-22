let eventReg= /^[a-zA-Z ]{3,10}$/;
let dateReg=/^\d{1,2}\/\d{1,2}\/\d{4}$/;
$("#eventName").keyup(function (e){
    //$("#eventName").val()
    if(eventReg.test($("#eventName").val()))
    {
        $("#eventName").removeClass("is-invalid");
        $("#eventName").addClass("is-valid");
    }
    else
    {
        $("#eventName").removeClass("is-valid");
        $("#eventName").addClass("is-invalid");
    }


});

$("#date").keyup(function (e){
    
    if(dateReg.test($("#date").val()))
    {
        $("#date").removeClass("is-invalid");
        $("#date").addClass("is-valid");
    }
    else
    {
        $("#date").removeClass("is-valid");
        $("#date").addClass("is-invalid");
    }
    
    

});

$("#desc").keyup(function (e){
    
    if(eventReg.test($("#desc").val()))
    {
        $("#desc").removeClass("is-invalid");
        $("#desc").addClass("is-valid");
    }
    else
    {
        $("#desc").removeClass("is-valid");
        $("#desc").addClass("is-invalid");
    }
});
$("#msg").keyup(function (e){
    
    if(eventReg.test($("#msg").val()))
    {
        $("#msg").removeClass("is-invalid");
        $("#msg").addClass("is-valid");
    }
    else
    {
        $("#msg").removeClass("is-valid");
        $("#msg").addClass("is-invalid");
    }
});

// $("#addTickit").click(function(){
//     if($("#addTickit").html()=="Add")
//     {
        
//         $("#addTickit").html("Skip");
        
//     }
//     else
//     {
//         $("#addTickit").html("Add");
//     }
//     $(".ticket").fadeToggle();
// });

let count=1;
$("#addTickit").click(function(){

    var content=`
    <div id="${count}" class="ticket">
                          <div class="form-group row">
                            <div class="col-md-6">
                            <label class="col-form-label label-align">Ticket Name</label>
                            
                                <input type="text" class="form-control" id="ticketName" required>
                            </div>

                            <div class="col-md-6">
                            <label class="col-form-label label-align">select file</label>
                            
                              <div class="input-group mb-3">
                               
                                <div class="custom-file">
                                  <input type="file" class="custom-file-input" id="inputGroupFile01">
                                  <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6">
                            <label class="col-form-label label-align">Price</label>
                            
                                <input type="text" class="form-control" id="price" required>
                            </div>

                            <div class="col-md-6">
                            <label class="col-form-label label-align">Avilable Quantity</label>
                            
                                <input type="text" class="form-control" id="price" required>
                            </div>

                            <div class="col-md-6">
                            <label class="col-form-label label-align">pending Quantitty</label>
                            
                                <input type="text" class="form-control" id="pending" required>
                            </div>

                            <div class="col-md-6">
                            <label class="col-form-label label-align">Paid quantity</label>
                            
                                <input type="text" class="form-control" id="paid" required>
                            </div>
                            <div class="col-md-6">
                            <label class="col-form-label label-align">Max Quantity</label>
                            
                                <input type="text" class="form-control" id="price" required>
                            </div>

                            <div class="col-md-6">
                            <label class="col-form-label label-align">Description</label>
                            
                                <textarea name="" id="" cols="30" class="form-control" rows="2" id="desc"></textarea>
                                
                            </div>
                            <div class="col-md-6 ">
                            <label class="col-form-label label-align">Expire Date</label>
                            
                              <input type="text" id="date"class="form-control" data-inputmask="'mask': '99/99/9999'">
                          </div>

                          
                          </div>
                          
                          
                        <div onclick="deleteTicket(${count})" class="btn btn-danger" >Delete Ticket</div>
    `;
    
    $(".tickets").append(content);
    
    count++;
});





function deleteTicket(id)
{
    
    $("#"+id).hide();
}

let infoCount=1;
$("#addbuy").click(function(){

    var content=`
    <div id="inf${infoCount}" class="info my-2 row">
        <i onclick="dleteinfo('inf${infoCount}')" class="fas fa-backspace col-md-1 fa-x p-2 text-danger"></i>
        <div class="col-md-5 ">
            <input type="text" class="form-control p-2 " placeholder="Field Label">
        </div>
        <div class="col-md-5 ">
        <input type="text" class="form-control p-2" placeholder="Field Type">
    </div>  
    

    </div>
    `
    
    $(".allinfo").append(content);
    
    infoCount++;
});
function dleteinfo(id)
{
    $("#"+id).hide();
}

