
import {useEffect} from 'react';

function initializeGoogleAds() {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
}

function loadGoogleAdsScript() {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5573023383028949';
    script.async = true;
    script.crossorigin = "anonymous";
    document.head.appendChild(script);
}

export default function GoogleAds () {
    useEffect(() => {
        initializeGoogleAds();
        loadGoogleAdsScript();
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{
                display:  "inline-block",
                width:    "300px",
                height:   "60px"
            }}
            data-ad-client="ca-pub-5573023383028949"
            data-ad-slot="3778386575"
            data-ad-format="auto"
            data-full-width-responsive={true}
        />
    );
}