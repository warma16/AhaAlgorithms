let bucketSorting =async (bucket:number[],reverse:boolean=false)=>{
    let tmpNumberArray:number[]=[];
    for(var i=0;i<bucket.length;i++){
        if(tmpNumberArray[bucket[i]]==undefined){
            tmpNumberArray[bucket[i]]=0;
        }
        tmpNumberArray[bucket[i]]++;
    }
    if(!reverse){
        for(var i=0;i<tmpNumberArray.length;i++){
            if(tmpNumberArray[i]!=undefined){
                for(var j=0;j<tmpNumberArray[i];j++){
                    console.log(i);
                }
            }
        }
    }else{
        for(var i=tmpNumberArray.length-1;i>=0;i--){
            if(tmpNumberArray[i]!=undefined){
                for(var j=0;j<tmpNumberArray[i];j++){
                    console.log(i);
                }
            }
        }
    }
}
let bubbleSorting=async (numberArray:number[],reverse:boolean=false)=>{
    let tmp:number[]=[];
    for(var i=0;i<numberArray.length-1;i++){
        for(var j=0;j<numberArray.length;j++){
            let a=numberArray[j];
            let b=numberArray[j+1];
            if(a>b&&!reverse){
                numberArray[j]=b;
                numberArray[j+1]=a;
            }else if(a<b&&reverse){
                numberArray[j]=b;
                numberArray[j+1]=a;
            }
        }
    }
    console.log(numberArray);
}
let quickerSorting= async (numberArray:number[])=>{
    let tmp:number[]=[];
    for(var i=0;i<numberArray.length-1;i++){
        for(var j=0;j<numberArray.length;j++){
            let a=numberArray[j];
            let b=numberArray[j+1];
            if(a>b){
                numberArray[j]=b;
                numberArray[j+1]=a;
            }
        }
    }
    console.log(numberArray);
}
let selectionSorting=async (numberArray:number[],reverse:boolean=false)=>{
    let tmp:number[]=[];
    for(var i=0;i<numberArray.length-1;i++){
        console.log(numberArray);
        let min=numberArray[i];
        let minIndex=i;
        for(var j=i+1;j<numberArray.length;j++){
            console.log(numberArray);
            if(numberArray[j]<min){
                min=numberArray[j];
                console.log(numberArray);
                minIndex=j;
                console.log(numberArray);
            }
            console.log(numberArray);
        }
        if(minIndex!=i){
            console.log(numberArray);
            numberArray[minIndex]=numberArray[i];
            console.log(numberArray);
            numberArray[i]=min;
        }
        console.log(numberArray);
    }
    console.log(numberArray);
}
let ISBNQuestion=async (inputs:number[])=>{
    let tmp:number[]=[];
    interface response{
        needBuyBooksNumber:number;
        needBuyBooks:number[];
    }
    tmp=inputs.sort((a,b)=>{
        return a-b;
    })
    let tmpNumberArray:number[]=[];
    for(var i=0;i<tmp.length;i++){
        if(tmpNumberArray[tmp[i]]==undefined){
            tmpNumberArray[tmp[i]]=0;
        }
        tmpNumberArray[tmp[i]]++;
    }
    let needBuyBooksNumber:number=0;
    let needBuyBooks:number[]=[];
    for(var i=0;i<tmpNumberArray.length;i++){
        if(tmpNumberArray[i]!=undefined){
            needBuyBooksNumber+=tmpNumberArray[i];
            needBuyBooks.push(i);
        }
    }
    let response:response={
        needBuyBooksNumber:needBuyBooks.length,
        needBuyBooks:needBuyBooks
    }
    console.log(response);
    return response;
}
ISBNQuestion([20,40,32,67,40,20,89,300,400,15]);