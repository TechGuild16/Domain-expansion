import React from 'react';
import { useLocation } from 'react-router-dom';

const SolCon = () => {
    const location = useLocation().pathname;

    const pathParts = location.split('/')[2]?.split(':')[1]?.split('%20') || [];
    const fullTitle = pathParts.join(' ');
    const cleanedTitle = fullTitle.includes('undefined') ? '' : fullTitle;

    let LogoDesignContentObject = {
        title: "Logo Design",
        desc: "Our Logo Design service is all about crafting a unique visual representation of your brand. We create logos that not only look great but also embody your brand’s identity, making a memorable impression on your audience.",
        featuresDesc:
            "Customized Designs: Each logo is tailored to your specific brand, ensuring uniqueness. Multiple Concepts: We provide you with a range of logo concepts to choose from. Unlimited Revisions: We work with you until you’re completely satisfied with the design. Scalability: Logos are designed to look great across various media and sizes. High-Quality Files: You receive high-resolution logo files for versatile use.",
        benefitPoints: "Unique Brand Identity<br/>Memorable Impression<br/>Professionalism<br/>Versatility<br/>Brand Consistency",
        lastLine: "Ready to make a lasting impression with a unique logo?",
        mini: "Let's craft your brand identity together",
    };
    let printDesign = {
        title: "Print Design",
        desc: "Our Print Design service covers various marketing materials such as brochures, business cards, flyers, and banners. We ensure that these materials align with your brand identity and messaging.",
        featuresDesc:
            "Custom Designs: Each print material is uniquely tailored to your brand. High-Quality Graphics: We use high-resolution graphics for crisp printing. Effective Layouts: Designs are organized for clear communication of information. Attention to Detail: We focus on every element, from typography to color choices. Print-Ready Files: You receive files that are ready for professional printing.",
        benefitPoints: "Consistent Branding<br/>Clear Communication<br/>Professionalism<br/>Memorability<br/>Versatility",
        lastLine: "From brochures to banners, we design materials that captivate.",
        mini: "Contact us to bring your print materials to life.",
    };
    let websiteContent = {
        title: "Website Content",
        desc: "Our Website Content service is all about creating or refining the content on your website. We focus on effectively communicating your brand’s unique value, captivating visitors, and encouraging them to take action.",
        featuresDesc:
            "Customized Content: We tailor content to reflect your brand’s voice and message. Engagement-Driven Writing: Content that captivates visitors and keeps them exploring your site.  Clear Calls toAction: Strategically placed prompts that guide visitors to desired actions. SEO Optimization: Content that’s optimized for search engines to improve your site’s visibility.   User-Centric Approach: Content designed with your target audience in mind.",
        benefitPoints: "Strong Brand Messaging<br/>Increase Engagement<br/>Higher Conversions<br/>Improve SEO Quality<br/>Enhance User Experience",
        lastLine: "Ready to make your website an engaging and action-driving platform?",
        mini: "Let's craft compelling content together.",
    };
    let BlogArticle = {
        title: "Blog and Article Writing",
        desc: "Our Blog and Article Writing service focuses on creating informative and engaging content that showcases your expertise, attracts traffic, and enhances your website’s SEO.",
        featuresDesc:
            "Expert Content Creation: We produce well-researched and informative blog posts and articles.     Engagement-Driven Writing: Content designed to captivate and retain readers’ attention. SEO Optimization: We incorporate keywords to improve your content’s search engine ranking. Regular Updates: Consistent posting schedules to keep your audience engaged. Customized Topics: Content tailored to your industry and audience’s interests.",
        benefitPoints: "Demonstrated Expertise<br/>Increase Traffic<br/>Better SEO Rankings<br/>Audience Retention<br/>Effective Communication",
        lastLine: "Fuel your online presence with informative and captivating blog posts.",
        mini: "Start boosting your brand's authority and traffic.",
    };
    let contentMarketing = {
        title: "Content Marketing",
        desc: "Our Content Marketing service starts with thorough research and content planning using tools like BuzzSumo and Google Trends. We create engaging content, leveraging tools like Grammarly and Yoast for quality and SEO optimization. Distribution is managed through platforms like HubSpot and Buffer, and we track content performance using Google Analytics and social media insights. Our goal is to consistently deliver valuable content that resonates with your audience.",
        featuresDesc:
            "Content Creation: Engaging, valuable, and relevant content tailored to your audience. Content Distribution: Disseminating content across various channels to maximize reach. Content Strategy: Developing a content plan aligned with your brand’s objectives. Content Optimization: Ensuring content is SEO-friendly for higher visibility. Performance Tracking: Monitoring content performance and adjusting strategies.",
        benefitPoints: "Improve Brand Authority<br/>Increase Audience Engagement<br/>Increase Website Traffic<br/>Increase Lead Generation<br/>Provide Long-Term Value",
        lastLine: "Unlock the power of compelling content that engages and converts.",
        mini: " Start your content journey today.",
    };
    let ecommerce = {
        title: "E-Commerce Development",
        desc: "Our E-Commerce Development service is dedicated to building online stores that offer secure payment processing, efficient inventory management, and a seamless shopping experience for your customers.",
        featuresDesc:
            "Secure Payment Processing: Implementing trusted payment gateways for safe transactions. Inventory Management: Tools to efficiently manage and update your product catalog. User-Friendly Shopping: Intuitive interfaces that simplify the buying process. Custom Shopping Carts: Tailored solutions for cart management and checkout. Mobile Optimization: E-commerce sites optimized for mobile shoppers.",
        benefitPoints: "Online Selling Made Easy<br/>Customer Trust<br/>Efficient Operations<br/>Increase Sales<br/>Mobile Accessibility",
        lastLine: "Unlock the potential of online retail.",
        mini: " Contact us to build an e-commerce store that boosts your sales.",
    };
    let socialCopy = {
        title: "Social Media Copy",
        desc: "Our Social Media Copy service focuses on developing captivating social media captions and content that encourage interaction, sharing, and brand loyalty.",
        featuresDesc:
            "Engaging Captions: We create captions that grab your audience’s attention and encourage engagement. Shareable Content: Content designed to be easily shared, expanding your reach. Brand Voice Consistency: We maintain a consistent brand voice across all social media channels. Strategic Content Planning: A thought-out content calendar to align with your goals.    Audience-Centric Approach: Content tailored to resonate with your target audience.",
        benefitPoints: "Boosted Engagement<br/>Expanded Reach<br/>Consistent Brand Image<br/>Strategic Planning<br/>Audience Connection",
        lastLine: "Maximize engagement and brand loyalty with our captivating social media content.",
        mini: "Connect with us to start crafting your social presence.",
    };

    const highlightText = (text, wordToBold) => {
        const parts = text.split(new RegExp(`(${wordToBold})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === wordToBold.toLowerCase() ? <strong key={index}>{part}</strong> : part
        );
    };

    const formatFeatures = (text) => {
        return text.split('. ').map((sentence, index) => {
            if (!sentence.trim()) return null;
            const [boldPart, ...rest] = sentence.split(': ');
            return (
                <p key={index}>
                    {boldPart && <strong>{boldPart}:</strong>} {rest.join(': ')}
                </p>
            );
        });
    };

    const formatBenefits = (benefitText) => {
        return benefitText.split('<br/>').map((point, index) => (
            <p key={index} className="flex items-center">
                <span style={{ color: "#00ff26", marginRight: "8px" }}>✔</span> {point.trim()}
            </p>
        ));
    };

    return (
        <div>
            <div className="heroPart">
                <div className="">
                    {cleanedTitle ? <h1 style={{ color: "white" }}>{cleanedTitle}</h1> : <h1>Title Not Available</h1>}
                    <p style={{ textAlign: "center", color: "white" }}>Solutions</p>
                </div>
            </div>
            <div className="divider">
                <div className="firstRow border">firstrow</div>
                <div className="secondRow">
                    <div className="header">
                        <h1>{cleanedTitle}</h1>
                        {cleanedTitle === LogoDesignContentObject.title && <p>{highlightText(LogoDesignContentObject.desc, "Logo Design")}</p>}
                        {cleanedTitle === printDesign.title && <p>{highlightText(printDesign.desc, "Print Design")}</p>}
                        {cleanedTitle === websiteContent.title && <p>{highlightText(websiteContent.desc, "Website Content")}</p>}
                        {cleanedTitle === BlogArticle.title && <p>{highlightText(BlogArticle.desc, "Blog and Article Writing")}</p>}
                        {cleanedTitle === contentMarketing.title && <p>{highlightText(contentMarketing.desc, "Content Marketing")}</p>}
                        {cleanedTitle === ecommerce.title && <p>{highlightText(ecommerce.desc, "E-Commerce Development")}</p>}
                        {cleanedTitle === socialCopy.title && <p>{highlightText(socialCopy.desc, "Social Media Copy")}</p>}
                    </div>
                    <div className="header pt-4">
                        <h1 className="pb-3">Features</h1>
                        {cleanedTitle === LogoDesignContentObject.title && formatFeatures(LogoDesignContentObject.featuresDesc)}
                        {cleanedTitle === printDesign.title && formatFeatures(printDesign.featuresDesc)}
                        {cleanedTitle === websiteContent.title && formatFeatures(websiteContent.featuresDesc)}
                        {cleanedTitle === BlogArticle.title && formatFeatures(BlogArticle.featuresDesc)}
                        {cleanedTitle === contentMarketing.title && formatFeatures(contentMarketing.featuresDesc)}
                        {cleanedTitle === ecommerce.title && formatFeatures(ecommerce.featuresDesc)}
                        {cleanedTitle === socialCopy.title && formatFeatures(socialCopy.featuresDesc)}
                    </div>
                    <div className="header pt-4">
                        {cleanedTitle === LogoDesignContentObject.title && <h1>Benefits of LD</h1>}
                        {cleanedTitle === LogoDesignContentObject.title && <div className='pt-4'>{formatBenefits(LogoDesignContentObject.benefitPoints)}</div>}
                        {cleanedTitle === printDesign.title && <h1>Benefits of PD</h1>}
                        {cleanedTitle === printDesign.title && <div className='pt-4'>{formatBenefits(printDesign.benefitPoints)}</div>}
                        {cleanedTitle === websiteContent.title && <h1>Benefits of WC</h1>}
                        {cleanedTitle === websiteContent.title && <div className='pt-4'>{formatBenefits(websiteContent.benefitPoints)}</div>}
                        {cleanedTitle === BlogArticle.title && <h1>Benefits of BA</h1>}
                        {cleanedTitle === BlogArticle.title && <div className='pt-4'>{formatBenefits(BlogArticle.benefitPoints)}</div>}
                        {cleanedTitle === contentMarketing.title && <h1>Benefits of CM</h1>}
                        {cleanedTitle === contentMarketing.title && <div className='pt-4'>{formatBenefits(contentMarketing.benefitPoints)}</div>}
                        {cleanedTitle === ecommerce.title && <h1>Benefits of EC</h1>}
                        {cleanedTitle === ecommerce.title && <div className='pt-4'>{formatBenefits(ecommerce.benefitPoints)}</div>}
                        {cleanedTitle === socialCopy.title && <h1>Benefits of SC</h1>}
                        {cleanedTitle === socialCopy.title && <div className='pt-4'>{formatBenefits(socialCopy.benefitPoints)}</div>}
                    </div>
                    <div className="header pt-4">
                        {cleanedTitle === LogoDesignContentObject.title && <h1 className='text-center'>
                            {LogoDesignContentObject.lastLine}
                        </h1>}
                        {cleanedTitle === LogoDesignContentObject.title && <p className='text-center'>
                            {LogoDesignContentObject.mini}
                        </p>}
                        {cleanedTitle === printDesign.title && <h1 className='text-center'>
                            {printDesign.lastLine}
                        </h1>}
                        {cleanedTitle === printDesign.title && <p className='text-center'>
                            {printDesign.mini}
                        </p>}
                        {cleanedTitle === websiteContent.title && <h1 className='text-center'>
                            {printDesign.lastLine}
                        </h1>}
                        {cleanedTitle === websiteContent.title && <p className='text-center'>
                            {printDesign.mini}
                        </p>}
                        {cleanedTitle === BlogArticle.title && <h1 className='text-center'>
                            {BlogArticle.lastLine}
                        </h1>}
                        {cleanedTitle === BlogArticle.title && <p className='text-center'>
                            {BlogArticle.mini}
                        </p>}
                        {cleanedTitle === contentMarketing.title && <h1 className='text-center'>
                            {contentMarketing.lastLine}
                        </h1>}
                        {cleanedTitle === contentMarketing.title && <p className='text-center'>
                            {contentMarketing.mini}
                        </p>}
                        {cleanedTitle === ecommerce.title && <h1 className='text-center'>
                            {ecommerce.lastLine}
                        </h1>}
                        {cleanedTitle === ecommerce.title && <p className='text-center'>
                            {ecommerce.mini}
                        </p>}
                        {cleanedTitle === socialCopy.title && <h1 className='text-center'>
                            {socialCopy.lastLine}
                        </h1>}
                        {cleanedTitle === socialCopy.title && <p className='text-center'>
                            {socialCopy.mini}
                        </p>}
                    </div>
                    <div className="header ">
                        <div className="button text-center" id='sobutton'>
                            <button >
                                Let's talk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolCon;
