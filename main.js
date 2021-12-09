

let uploadbtn = document.getElementById('uploadbtn')
let fileInput = document.getElementById('fileInput')
let imgBox = document.querySelector('.img-box')

uploadbtn.addEventListener('click', function(e){

    fileInput.click()

})


fileInput.onchange = function(e){

    let file = e.target.files;

    imgBox.innerHTML = "";

    [...file].forEach(x=>{

        if(!x.type.startsWith('image/')){
            alert('duzgun frmt deyil')
        }


        let reader = new FileReader();

        reader.onloadend = function(e){

            let img = document.createElement('img');
            img.setAttribute('src',reader.result);
            img.className='img-item'

            imgBox.appendChild(img)
        }

        reader.readAsDataURL(x)

    }) 
}



// fileInput.onchange = function(e){

//     let file = e.target.files;

//     [...file].forEach(x=>{

//         if(!x.type.startsWith('image/')){
//             alert('format duzgun deyil')
//         }

//     })
// }


{/* <input type='file' accept='text/plain' onchange='openFile(event)'><br>
<img id='output'>
<script>
  var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
  };
</script> */}

//https://www.javascripture.com/FileReader  









































