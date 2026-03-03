let valeurs =[0,1,"","0",null,undefined,NaN,false,[],{}];
 for (i =0 ;i< valeurs.length ; i++ ){
    let val = valeurs[i];
    let type = val ? "truthy" : "falsy" ; 
    console.log(String(val)+"->"+type );
 }