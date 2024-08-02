let b = document.querySelectorAll(".one");
let r=document.querySelector(".n");
let m=document.querySelector(".msg");
let h=document.querySelector(".hide");
let n=document.querySelector(".msg2");
let o=document.querySelector(".hides");
let turn=0;
let c=0;
let k=0;
let winPattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
b.forEach((one) => {
    one.addEventListener("click",()=>{
        if(turn==0){
           one.innerText="X";
           one.style.color="blue";
           turn=1;
           c++;
        }
        else{
            one.innerText="O";
           one.style.color="brown";
           turn=0;
           c++;
        }
        one.disabled=true;
        Winner();
      })
    });
    const enable=()=>{
        for(box of b){
            box.disabled=false;
            box.innerText="";
        }
    }
    const disable=()=>{
        for(box of b){
            box.disabled=true;
        }
    }
    const restart=()=>{
        for(j of b){
            m.classList.remove("msg");
            h.classList.add("hide");
            n.classList.remove("msg2");
            o.classList.add("hide");
            turn=0;
            enable();
        }
    }

    const Winner=()=>{
        for (let i of winPattern)
        {
            let p1=b[i[0]].innerText;
            let p2=b[i[1]].innerText;
            let p3=b[i[2]].innerText;
            if(p1!="" && p2!="" && p3!=""){
                if(p1==p2 && p2==p3 ||p2==p3 && p3==p1){
                    k=1; 
                    console.log("winner");
                     m.classList.add("msg");
                     disable();
                     h.classList.remove("hide");
                    
                }
                else {
                    k=0;
                    if(c==9 && k==0){
                        n.classList.add("msg2");
                        o.classList.remove("hides");
                      
                    }
                }
            }
        }
    }
    r.addEventListener("click",()=>{
        restart();
        
    })
