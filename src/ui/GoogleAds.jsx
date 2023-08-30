
import {useEffect} from 'react';

function initializeGoogleAds() {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
}

function loadGoogleAdsScript() {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5573023383028949';
    script.async = true;
    document.head.appendChild(script);
}

export default function GoogleAds() {
    useEffect(() => {
        initializeGoogleAds();
        loadGoogleAdsScript();
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-5573023383028949"
            data-ad-format="auto"
        />
    );
}