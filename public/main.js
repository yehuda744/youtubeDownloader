
$(document).on('submit', '#form', function(e){
    var input = document.getElementById('input').value;
    var t = Date.now();
    Submit(JSON.stringify(input) , t);
    console.log(input);
});
// thsi si the function that seds what we search for and gets a response then it return all the data from the profile we searched
// then it parses through and makes an image from the profile pic and also puts the last caption into a var
function Submit(input, t) {
    $.ajax({
        type:'GET',
        url:`search?Q=${input}&TYPE='hello'`,
        processData: false,
        async: true,
        cache: false,
        data : false,
        success: function(response){
        }
    });
}
