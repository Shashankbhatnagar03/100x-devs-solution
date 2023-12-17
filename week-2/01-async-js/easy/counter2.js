let count =0;

function timout(){
    setTimeout(()=>{

        counter();
    },1000);
}

function counter(){
    count++;
    console.log(count);
    timout();
}

counter();