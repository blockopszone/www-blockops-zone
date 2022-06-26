---
layout: base-layout.njk
title: Contribute
---
<h1>/Contribute</h1>
<div class="contribute-wrapper">
    <div class="contribute first">
        <div class="post-content">
        <p><strong>Want to help to grow the project? There are many ways you can help.</strong></p>
        <h3>Sharing your talents</h3>
        <p>Contributing with code, documentation or articles to any of the repositories of the project, any help is welcome. Contribution rules will be made available in every project.</p>
        <p><a href="{{ '/about/' | url }}">Get in touch with us</a></p>
        </div>
        <div class="post-image"><img src="{{ '/img/contribute1.jpg' | url }}" /></div>
    </div>
    <div class="contribute second">
        <div class="post-image"><img src="{{ '/img/contribute2.jpg' | url }}" /></div>
        <div class="post-content">
        <h3>Staking with us!</h3>
        <p>we’re commited to not only run the stake pool diligently to maximize the returns, but also to dedicate the rewards to increase the resources for the project, collaborating this way to the growth of the Cardano ecosystem.</p>
        <p><a href="{{ '/cardano/stakepool/' | url }}">More info</a></p>
        </div>
    </div>
    <div class="contribute third">
        <div class="post-content">
        <h3>Donating</h3>
        <p>Buying us a beer! sometimes we just need one, by donating to the following addresses</p>
        <div class="donate-buttons">
            <button class="button button-paypal">Paypal donate</button>
            <button class="button button-wallet" onclick="copyToClipboard()">Copy ADA wallet</button>
        </div>
        <script>
        function copyToClipboard(text) {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", "34984398949439898984398");
        }
        </script>
    </div>
        <div class="circular-sb">
        Buy me a beer!
        <div class="circle1"></div>
        <div class="circle2"></div>
    </div>
        <div class="post-image"><img src="{{ '/img/contribute3.jpg' | url }}" /></div>
    </div>
    
</div>

