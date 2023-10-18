// first intall jest by using  📝npm i jest📝

//go to package.json and modify test => 'jest'


function sum(a,b)
{   console.log(a+b)
    return (a+b);
}

module.exports=sum;
//module.exports={sum}; if you write like this when you import, you should do like this
// const myModule=require('./sum')
// then 🤩⚠ myModule.sum() ⚠🤩
