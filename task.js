
rows=4
for(i=1;i<=rows;i++){
    res="", num=i
    for(j=1;j<=i;j++){
        res=res+num*2+" "
        num=num+rows-j
    }
    console.log(res)

}