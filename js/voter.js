class Voter{
    constructor(){
        this.name=null;
        this.emailid=null;
        this.index=0;
    }
getCount(){
        var voterCountref=database.ref('voterCount')
        voterCountref.on("value",function(data){voterCount=data.val();})
   
    }

    updateCount(voterCount)
    {

        console.log("voterCount updated:" +voterCount)
        database.ref('/').update({
            voterCount:voterCount
        })
    }

    update(){

        var voterIndex="voters/voter" +voterCount
        console.log("voterIndex")

        database.ref(voterIndex).update({name:this.name,Emailid:this.emailid});
        }
  
    }