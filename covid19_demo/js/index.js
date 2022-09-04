$.ajax({
    url:"http://192.168.56.100:3000/api/ncov",
    type:"get",
    success: data => {
        let covid19Info = data.newslist[0];
        console.log(covid19Info);
        setContentInfo(covid19Info.desc);
    }
})

function setContentInfo(data){
    $("#covid-note1").html(data.note1);
    $("#covid-note2").html(data.note2);
    $("#covid-note3").html(data.note3);
    $("#covid-remark1").html(data.remark1);
    $("#covid-remark2").html(data.remark2);
    $("#covid-remark3").html(data.remark3);
}