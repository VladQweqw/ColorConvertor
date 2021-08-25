let hex = $("#hex")
let rgb = $("#rgb")
let count = 0;

$(() => {
    hex.click(toHEX)
    rgb.click(toRGB)

    function toHEX(){
        let len = $("#hex").val().length;
       let c = hex.val().slice(1,3);
       let d = hex.val().slice(3,5);
       let e = hex.val().slice(5);


           let rgbOut = "rgb("+parseInt(c,16)+","+parseInt(d,16)+","+parseInt(e,16)+")"
            rgb.val(rgbOut)
            $(document.body).css({"background-color":rgbOut})

          
        }
        function toRGB(){
        

            rgbArr = rgb.val().substring(4, rgb.val().length-1).replace(/ /g, '').split(',');



                    let r = Number(rgbArr[0])
                    let g = Number(rgbArr[1])
                    let b = Number(rgbArr[2])
                    let hexOut = "#"+r.toString(16)+g.toString(16)+b.toString(16);
                    hex.val(hexOut)      
                    $(document.body).css({"background-color":hexOut})
            }
    





})

