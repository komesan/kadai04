
//1.Save クリックイベント

$(".save").on('click', function () {
    let key = $('input:radio[name="food"]:checked').val();
    let memo = $('input:radio[name="add"]:checked').val();

    console.log(key);
    console.log(memo);
    if (key === "" || memo === "") {
        alert('選んでね〜〜')
    }

    localStorage.setItem(key, memo)

    const html = `
                <tr>
                    <th><img src='img/+${key}+.jpg'></th>
                    <td>${memo}</td>
                </tr>                
    `;
    $(".main_list").append(html);
});


//2.clear クリックイベント
$(".clear").on('click', function() {
    $(this).val("");
    // できない・・・
});

//3.diet クリックイベント
$(".diet").on('click', function() {
    localStorage.clear();
    $(".list").empty();
    location.reload();
});

//4.ページ読み込み：保存データ取得表示

for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const html = `
        <tr>
            <th>${key}</th>
            <td>${value}</td>
        </tr>
    
    `
            // 画面上に埋め込み
            $(".main_list").append(html)

}

// 5個食べたら進化する
if (localStorage.length > 4 && level === 1) {
    $(".main_img").attr('src', 'img/iroha2.JPG');
    level += 1;
    location.reload();
}

