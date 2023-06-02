window.onload=function(){
    let $input = document.querySelector('input')
    let $button = document.querySelector('button')

    let data = [{
        "role": "system",
        "content": "assistant는 노래 추천 전문가이다."
    }]

    let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

    $button.addEventListener('click', e =>{
        e.preventDefault()
        userInputData = $input.value
        $input.value = ''

        data.push({
            "role": "user",
            "content": userInputData
        })

        chatGptAPI()
    })

    function chatGptAPI(){
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            redirect: "follow",
        })
        .then(res => res.json())
        .then(res => {
            document.querySelector('#contents').innerText = res.choices[0].message.content
        })
    }
}