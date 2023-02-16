
    let portImg = 0;
    let Pimages =[];
    let Ptime = 3000;

    Pimages[0] = 'projects/portfolio1.PNG';
    Pimages[1] = 'projects/portfolio2.PNG';
    Pimages[2] = 'projects/portfolio3.PNG';
    Pimages[3] = 'projects/portfolio4.PNG';

    function PortfolioImage(){
    document.proj1Img.src = Pimages[portImg];

        if(portImg < Pimages.length - 1){
            portImg++;
        }
        else {
            portImg = 0;
        }
        setTimeout("PortfolioImage()", Ptime);
        }
    window.addEventListener('load', PortfolioImage);
    
    var thesisImg = 0;
    var images =[];
    var time = 3000;

    images[0] = 'projects/thesis1.PNG';
    images[1] = 'projects/thesis2.PNG';
    images[2] = 'projects/thesis3.PNG';
    images[3] = 'projects/thesis4.png';

    function thesisImage(){
    document.proj2Img.src = images[thesisImg];

        if(thesisImg < images.length - 1){
            thesisImg ++;
        }
        else {
            thesisImg = 0;
        }
        setTimeout("thesisImage()", time);
        }  
    window.addEventListener('load', thesisImage);

    var thesisImg2 = 0;
    var images2 =[];
    var time2 = 3000;

    images2[0] = 'projects/mobile1.jpg';
    images2[1] = 'projects/mobile2.jpg';
    images2[2] = 'projects/mobile3.jpg';
    images2[3] = 'projects/mobile4.jpg';

    function mobileImage(){
    document.mobImg.src = images2[thesisImg2];

        if(thesisImg2 < images2.length - 1){
            thesisImg2 ++;
        }
        else {
            thesisImg2 = 0;
        }
        setTimeout("mobileImage()", time2);
        }  
    window.addEventListener('load', mobileImage);