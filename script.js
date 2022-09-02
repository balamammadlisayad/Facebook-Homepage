{/*<div class="third-box">
                        <div class="top">
                            <div class="left">
                                <img src="/image/pp2.jpg" alt="profil-picture" width="36">
                            <div class="text">
                                <span>JM FILMS</span>
                                <small>5d</small>
                            </div>
                            </div>
                            <div class="right">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <div class="emoji">
                            <img src="	https://static.xx.fbcdn.net/images/emoji.php/v9/t59/1.5/16/1f5a4.png" alt="emoji" width="16" height="16">
                        </div>
                        <div class="main">
                            <img src="/image/post1.jpg" alt="" width="500" height="495.76">
                        </div>
                            <div class="bottom">
                                <div class="bottom-top">
                                    <span>7.2K</span>
                                <div class="comments">
                                    <span>161 Comments</span>
                                    <span>157 Shares</span>
                                </div>
                                </div>
                                <div class="bottom-down">
                                    <div class="like">
                                        <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/xLwgcPdRIyJ.png&quot;); background-position: 0px -284px; background-size: 26px 844px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                                        <span>Like</span>
                                    </div>
                                    <div class="comment">
                                        <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/xLwgcPdRIyJ.png&quot;); background-position: 0px -244px; background-size: 26px 844px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                                        <span>Comment</span>
                                    </div>
                                    <div class="like">
                                        <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/xLwgcPdRIyJ.png&quot;); background-position: 0px -304px; background-size: 26px 844px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>*/}

const xeberlerimiz = document.getElementById('status-section')

window.onload = bringNews()

async function bringNews() {
    const theApi = "status.json"

    try {
        const theRequest = await fetch(theApi)
        const theResponse = await theRequest.json()

        for (let i = 0; i < theResponse.length; i++) {
         xeberlerimiz.innerHTML += `
         <div class="third-box">
                        <div class="top">
                            <div class="left">
                                <img src="${theResponse[i].image}" alt="profil-picture" width="36">
                            <div class="text">
                                <span>${theResponse[i].paylasan_sexs}</span>
                                <small>${theResponse[i].paylasilma_vaxti}</small>
                            </div>
                            </div>
                            <div class="right">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <div class="emoji">
                            <img src="	https://static.xx.fbcdn.net/images/emoji.php/v9/t59/1.5/16/1f5a4.png" alt="emoji" width="16" height="16">
                        </div>
                        <div class="main">
                            <img src="${theResponse[i].post}" alt="" width="500" height="495.76">
                        </div>
                            <div class="bottom">
                                <div class="bottom-top">
                                    <span>${theResponse[i].like_sayi}</span>
                                <div class="comments">
                                    <span>161 Comments</span>
                                    <span>157 Shares</span>
                                </div>
                                </div>
                                <div class="bottom-down">
                                    <div class="like">
                                        <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/xLwgcPdRIyJ.png&quot;); background-position: 0px -284px; background-size: 26px 844px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                                        <span>Like</span>
                                    </div>
                                    <div class="comment">
                                        <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/xLwgcPdRIyJ.png&quot;); background-position: 0px -244px; background-size: 26px 844px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                                        <span>Comment</span>
                                    </div>
                                    <div class="like">
                                        <i data-visualcompletion="css-img" class="gneimcpu oee9glnz" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/xLwgcPdRIyJ.png&quot;); background-position: 0px -304px; background-size: 26px 844px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
         `
            
        }
    }

    catch(err) {

    }
}