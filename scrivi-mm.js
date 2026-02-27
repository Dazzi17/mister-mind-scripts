window.CHAT_WIDGET_CUSTOMIZATIONS = {

  chatButton: "💬",

  clearBtnText: "Nuova conversazione",
  placeholderText: "Scrivi qui il tuo pensiero...",
  stopGeneratingText: "Interrompi",

  // Disclaimer YMYL – obbligatorio per compliance Google
  disclaimerText: "Mister Mind è un coach AI per la crescita personale, non uno psicologo né un professionista della salute mentale. In caso di disagio grave rivolgiti sempre a uno specialista.",

  termsText: "Termini e condizioni",
  termsUrl: "https://parlaconmistermind.it/termini-e-condizioni",
  privacyText: "Privacy policy",
  privacyUrl: "https://parlaconmistermind.it/privacy-policy",

  title: "Mister Mind",
  description: "Il tuo coach AI per crescere, riflettere e stare meglio.",

  initialMessage: "Ciao, sono Mister Mind. Sono qui per ascoltarti, aiutarti a fare chiarezza e accompagnarti nel tuo percorso di crescita personale. Da dove vuoi iniziare?",

  confirmationText: "Vuoi davvero chiudere la conversazione?",
  confirmationButtonText: "Sì, chiudi",
  confirmationCancelButtonText: "No, continua",

  feedbackTitle: "Come è andata?",
  feedbackSubtitle: "La tua opinione aiuta Mister Mind a migliorare.",
  feedbackRatingTitle: "Quanto è stata utile questa conversazione?",
  feedbackDetailsLabel: "Vuoi aggiungere qualcosa?",
  feedbackSubmitButton: "Invia il feedback",
  feedbackSkipButton: "Chiudi senza lasciare feedback",

  mobileNavChatbotText: "Chat",
  mobileNavSupportText: "Info"
};


// ------------------------------------------------------------
// 2. OVERRIDE STILI – Design system Mister Mind
// ------------------------------------------------------------
(function injectMisterMindStyles() {
  var s = document.createElement('style');
  s.textContent = "\
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&family=Fraunces:wght@600;700&display=swap');\
\
.original_chat-button {\
  background-color: #005c65 !important;\
  border-color: #005c65 !important;\
  font-family: 'Rubik', sans-serif !important;\
  font-weight: 600 !important;\
  letter-spacing: 0.03em !important;\
}\
.original_popup {\
  border-radius: 1.5rem !important;\
}\
.original_sidebar {\
  background-color: #2a292d !important;\
  font-family: 'Rubik', sans-serif !important;\
}\
.original_sidebar-title {\
  font-family: 'Fraunces', serif !important;\
  font-weight: 700 !important;\
  color: #ffffff !important;\
}\
.original_sidebar-bottom {\
  background-color: #e1f0ee !important;\
}\
.original_sidebar-bottom-title {\
  color: #2a292d !important;\
  font-family: 'Fraunces', serif !important;\
}\
.original_sidebar-bottom-description {\
  color: #2a292d !important;\
  font-family: 'Rubik', sans-serif !important;\
}\
.original_sidebar-widget.original_box,\
.original_sidebar-widget.original_adia {\
  background-color: rgba(0,92,101,0.25) !important;\
}\
.original_widget-title {\
  color: #e1f0ee !important;\
  font-family: 'Rubik', sans-serif !important;\
  font-weight: 600 !important;\
}\
.original_widget-description {\
  color: #e1f0ee !important;\
  font-family: 'Rubik', sans-serif !important;\
}\
.original_loader {\
  border-top-color: #005c65 !important;\
}\
.original_confirmation-title {\
  font-family: 'Fraunces', serif !important;\
  color: #2a292d !important;\
}\
.original_confirm-close {\
  background-color: #005c65 !important;\
  color: #ffffff !important;\
  font-family: 'Rubik', sans-serif !important;\
}\
.original_cancel-close {\
  background-color: #e1f0ee !important;\
  color: #2a292d !important;\
  font-family: 'Rubik', sans-serif !important;\
}\
.original_feedback-title {\
  font-family: 'Fraunces', serif !important;\
  color: #2a292d !important;\
}\
.original_feedback-subtitle,\
.original_feedback-rating-title,\
.original_feedback-details-label {\
  font-family: 'Rubik', sans-serif !important;\
  color: #2a292d !important;\
}\
.original_star.original_active {\
  color: #f2734a !important;\
}\
.original_feedback-textarea {\
  font-family: 'Rubik', sans-serif !important;\
  border-color: #e1f0ee !important;\
}\
.original_feedback-textarea:focus {\
  border-color: #005c65 !important;\
  outline: none !important;\
}\
.original_feedback-submit {\
  background-color: #005c65 !important;\
  font-family: 'Rubik', sans-serif !important;\
}\
.original_feedback-submit:hover:not(:disabled) {\
  background-color: #004a52 !important;\
}\
.original_feedback-submit:disabled {\
  background-color: #e1f0ee !important;\
  color: #9db8bc !important;\
}\
.original_feedback-skip {\
  color: #005c65 !important;\
  font-family: 'Rubik', sans-serif !important;\
}\
.original_feedback-skip:hover {\
  color: #f2734a !important;\
}\
.original_mobile-nav {\
  background-color: #2a292d !important;\
  border-top-color: #005c65 !important;\
}\
.original_mobile-nav-button {\
  font-family: 'Rubik', sans-serif !important;\
  color: #e1f0ee !important;\
  background-color: #2a292d !important;\
}\
.original_mobile-nav-button.original_active {\
  background-color: #005c65 !important;\
  color: #ffffff !important;\
}\
.original_mobile-nav-button:not(.original_active):hover {\
  background-color: rgba(0,92,101,0.2) !important;\
}\
.original_chat-badge {\
  font-family: 'Rubik', sans-serif !important;\
  font-size: 10px !important;\
  font-weight: 500 !important;\
  letter-spacing: 0.05em !important;\
}\
@media (prefers-color-scheme: light) {\
  .original_sidebar { background-color: #2a292d !important; }\
  .original_sidebar-widget.original_box, .original_sidebar-widget.original_adia { background-color: rgba(0,92,101,0.2) !important; }\
  .original_widget-title { color: #e1f0ee !important; }\
  .original_widget-description { color: #e1f0ee !important; }\
  .original_mobile-nav-button.original_active { background-color: #005c65 !important; color: #ffffff !important; }\
  .original_star.original_active { color: #f2734a !important; }\
  .original_feedback-submit { background-color: #005c65 !important; }\
  .original_feedback-submit:hover:not(:disabled) { background-color: #004a52 !important; }\
}";
  document.head.appendChild(s);
})();


// ------------------------------------------------------------
// 3. SCRIPT ORIGINALE ORIGINAL LAND (completo, invariato)
// ------------------------------------------------------------
(function () {
    const customizations = window.CHAT_WIDGET_CUSTOMIZATIONS || {};

    const consultationUrl = 'https_lugano';
    const feedbackUrl = "https://ai-api.original.land/api/feedback/conversation_feedback";
    let aiChatUrl = "https://ai.original.land/widget/66e421708b070a1da662c498668ce61200be4decde037be5?bot_key=bot_4CdkqGv2b6XEfEHDFkZ9EeNsJFZwqsuH";

    const config = {
        chatButton: customizations.chatButton || "↗️",
        clearBtnText: customizations.clearBtnText || "Clear conversation",
        placeholderText: customizations.placeholderText || "How can I help you...",
        stopGeneratingText: customizations.stopGeneratingText || "Stop",
        disclaimerText: customizations.disclaimerText || "The virtual assistant may make mistakes. Consider verifying important information.",
        termsText: customizations.termsText || "Terms and conditions",
        termsUrl: customizations.termsUrl || null,
        privacyText: customizations.privacyText || "Privacy policy",
        privacyUrl: customizations.privacyUrl || null,
        initialMessage: customizations.initialMessage || null,
        title: customizations.title || null,
        description: customizations.description || null,
        confirmationText: customizations.confirmationText || "Are you sure you want to close the chat?",
        confirmationButtonText: customizations.confirmationButtonText || "Close chat",
        confirmationCancelButtonText: customizations.confirmationCancelButtonText || "Continue chat",
        feedbackTitle: customizations.feedbackTitle || "Share your experience",
        feedbackSubtitle: customizations.feedbackSubtitle || "Share your experience with our chatbot.",
        feedbackRatingTitle: customizations.feedbackRatingTitle || "Evaluate today's experience with the chatbot.",
        feedbackDetailsLabel: customizations.feedbackDetailsLabel || "Share some details",
        feedbackSubmitButton: customizations.feedbackSubmitButton || "Submit survey",
        feedbackSkipButton: customizations.feedbackSkipButton || "Close without feedback",
        mobileNavChatbotText: customizations.mobileNavChatbotText || "Chatbot",
        mobileNavSupportText: customizations.mobileNavSupportText || "Support"
    };

    function buildUrlParams() {
        const urlParams = new URLSearchParams();

        urlParams.set('disclaimerText', config.disclaimerText);

        if (config.clearBtnText) urlParams.set('clearBtnText', config.clearBtnText);
        if (config.placeholderText) urlParams.set('placeholderText', config.placeholderText);
        if (config.stopGeneratingText) urlParams.set('stopGeneratingText', config.stopGeneratingText);
        if (config.termsUrl) {
            urlParams.set('termsUrl', config.termsUrl);
            urlParams.set('termsText', config.termsText);
        }
        if (config.privacyUrl) {
            urlParams.set('privacyUrl', config.privacyUrl);
            urlParams.set('privacyText', config.privacyText);
        }
        if (config.title) urlParams.set('title', config.title);
        if (config.description) urlParams.set('description', config.description);

        return urlParams.toString();
    }

    const urlParams = buildUrlParams();
    if (urlParams) {
        aiChatUrl = aiChatUrl + '&' + urlParams;
    }

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');

    /* === ANIMATIONS === */
    @keyframes enterFromRight {
        0% { opacity: 0; transform: translateY(-50%) translateX(100%); }
        100% { opacity: 1; transform: translateY(-50%) translateX(0); }
    }

    @keyframes growButton {
        0% { transform: scale(1) rotate(180deg); }
        100% { transform: scale(1.1) rotate(180deg); }
    }

    @keyframes shrinkButton {
        0% { transform: scale(1.1) rotate(180deg); }
        100% { transform: scale(1) rotate(180deg); }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }

    /* === MAIN WIDGET === */
    .original_chat-widget {
        display: inline-grid;
        position: fixed;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: 10000;
        opacity: 0;
        animation: enterFromRight 1s ease-out 1s forwards;
        font-family: 'Nunito Sans', sans-serif;
        overscroll-behavior: none;
    }

    .original_chat-button {
        padding: 10px 5px;
        background-color: #bf0d3e;
        color: white;
        border: 1px solid #bf0d3e;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        transform: rotate(180deg);
        transition: transform 0.3s ease-out;
        position: relative;
        border-radius: 0 4px 4px 0;
    }

    .original_chat-button:hover {
        animation: growButton 0.3s ease-out forwards;
    }

    .original_chat-button .original_chat-badge {
        font-size: 12px;
        font-weight: bold;
        margin-top: 10px;
    }

    /* === OVERLAYS AND MODALS === */
    .original_overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10002;
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }

    .original_overlay.original_show {
        display: block;
        animation: fadeIn 0.3s ease-out forwards;
    }

    .original_overlay.original_hide {
        animation: fadeOut 0.3s ease-out forwards;
    }

    .original_popup {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        transform: none;
        width: 95vw;
        height: 95vh;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        z-index: 10003;
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }

    .original_popup.original_show {
        display: flex;
        animation: fadeIn 0.3s ease-out forwards;
    }

    .original_popup.original_hide {
        animation: fadeOut 0.3s ease-out forwards;
    }

    .original_popup-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
    }

    /* === SIDEBAR === */
    .original_sidebar {
        width: 380px;
        min-width: 380px;
        background-color: #171717;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        padding: 40px 60px 20px 60px;
        display: flex;
        flex-direction: column;
        border-radius: 10px 0 0 10px;
        max-height: 95vh;
        overflow-y: auto;
        gap: 20px;
    }

    .original_sidebar-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
    }

    .original_sidebar-main {
        flex: 1;
    }

    .original_sidebar-title {
        color: #f6f5f5;
        font-weight: 800;
        font-size: 19px;
        margin-bottom: 24px;
        line-height: 24px;
    }

    .original_sidebar-widgets {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .original_sidebar-widget {
        text-decoration: none;
        color: inherit;
        transition: background-color 0.3s ease;
    }

    .original_sidebar-widget.original_box,
    .original_sidebar-widget.original_adia {
        padding: 16px;
        background-color: #454545;
        text-decoration: none;
    }

    .original_sidebar-widget.original_adia.original_offline {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .original_sidebar-widget.original_link {
        color: #f6f5f5;
        font-weight: bold;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .original_sidebar-widget.original_link:hover {
        text-decoration: underline;
    }

    .original_widget-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .original_widget-title {
        font-weight: 800;
        font-size: 16px;
        text-decoration: underline;
        color: #f6f5f5;
    }

    .original_widget-description {
        color: #f6f5f5;
        font-size: 14px;
        line-height: 1.4;
        margin-bottom: 0;
    }

    .original_widget-arrow {
        width: 12px;
        height: 12px;
        fill: #f6f5f5;
    }

    .original_widget-status {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 8px;
        margin-top: 12px;
    }

    .original_status-icon {
        width: 18px;
        height: 18px;
    }

    .original_status-icon.original_online path {
        fill: #249C0C;
    }

    .original_status-icon.original_offline path {
        fill: #979797;
    }

    .original_status-text {
        font-size: 12px;
        font-weight: 600;
    }

    .original_status-text.original_online {
        color: #249C0C;
    }

    .original_status-text.original_offline {
        color: #979797;
    }

    .original_sidebar-bottom {
        background-color: #f6f5f5;
        padding: 16px;
        flex-shrink: 0;
        margin-top: auto;
    }

    .original_sidebar-bottom-title {
        color: #171717;
        font-weight: 800;
        font-size: 16px;
        margin-bottom: 12px;
    }

    .original_sidebar-bottom-description {
        color: #171717;
        font-size: 14px;
        line-height: 1.4;
    }

    /* === CHAT CONTAINER === */
    .original_chat-container {
        flex: 1;
        position: relative;
        overflow: hidden;
        border-radius: 0 10px 10px 0;
    }

    .original_close-button {
        position: absolute;
        top: 10px;
        right: 22px;
        font-size: 24px;
        cursor: pointer;
        background: none;
        border: none;
        color: #333;
        z-index: 1;
    }

    .original_chat-iframe {
        width: 100%;
        height: 100%;
        display: block;
        border: none;
        border-radius: 0;
    }

    .original_loader {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #bf0d3e;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    /* === CONFIRMATION MODAL === */
    .original_confirmation-modal {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        max-width: 90%;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        z-index: 10004;
        padding: 30px;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }

    .original_confirmation-modal.original_show {
        display: block;
        animation: fadeIn 0.3s ease-out forwards;
    }

    .original_confirmation-modal.original_hide {
        animation: fadeOut 0.3s ease-out forwards;
    }

    .original_confirmation-title {
        font-size: 24px;
        margin-bottom: 30px;
        font-weight: bold;
    }

    .original_confirmation-buttons {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .original_confirmation-button {
        padding: 15px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        border: none;
        width: 100%;
    }

    .original_confirm-close {
        background-color: #000;
        color: white;
    }

    .original_cancel-close {
        background-color: #f5f5f5;
        color: #333;
    }

    /* === FEEDBACK MODAL === */
    .original_feedback-modal {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        max-width: 90%;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        z-index: 10005;
        padding: 40px;
        text-align: left;
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }

    .original_feedback-modal.original_show {
        display: block;
        animation: fadeIn 0.3s ease-out forwards;
    }

    .original_feedback-modal.original_hide {
        animation: fadeOut 0.3s ease-out forwards;
    }

    .original_feedback-title {
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: bold;
        color: #333;
        line-height: 1.3;
    }

    .original_feedback-subtitle {
        font-size: 18px;
        margin-bottom: 30px;
        color: #666;
        line-height: 1.5;
    }

    .original_feedback-rating-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
        color: #333;
    }

    .original_star-rating-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .original_star-rating {
        display: flex;
        gap: 5px;
    }

    .original_star {
        font-size: 30px;
        cursor: pointer;
        color: #e0e0e0;
        transition: color 0.2s ease;
    }

    .original_star.original_active {
        color: #000;
    }

    .original_feedback-details-label {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .original_feedback-textarea {
        width: 100%;
        height: 200px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        resize: none;
        font-size: 16px;
        margin-bottom: 30px;
        font-family: inherit;
    }

    .original_feedback-buttons {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .original_feedback-submit {
        background-color: #000;
        color: white;
        padding: 15px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        border: none;
        width: 100%;
        transition: background-color 0.3s ease;
    }

    .original_feedback-submit:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .original_feedback-skip {
        background-color: transparent;
        color: #666;
        padding: 15px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        text-align: center;
        text-decoration: underline;
    }

    /* === RESPONSIVE DESIGN === */
    @media(max-width: 768px) {
        .original_popup {
            width: 100vw;
            height: calc(var(--vh, 1vh) * 100);
            border-radius: 0;
        }

        .original_popup-content {
            flex-direction: column;
        }

        .original_sidebar {
            width: 100%;
            min-width: unset;
            border-radius: 0;
            padding: 20px 20px 10px 20px;
            padding-top: 60px;
            display: none;
            flex: 1;
            height: calc((var(--vh, 1vh) * 100) - 60px);
            max-height: calc((var(--vh, 1vh) * 100) - 60px);
            overflow-y: auto;
            gap: 15px;
        }

        .original_sidebar-content {
            display: flex;
            flex-direction: column;
            gap: 15px;
            flex: 1;
        }

        .original_sidebar-main {
            flex: 1;
        }

        .original_sidebar.original_mobile-active {
            display: flex;
        }

        .original_chat-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            height: calc((var(--vh, 1vh) * 100) - 60px);
            border-radius: 0;
        }

        .original_chat-container.original_mobile-hidden {
            display: none;
        }

        .original_chat-iframe {
            border-radius: 0;
            flex: 1;
        }

        .original_mobile-nav {
            display: flex;
            background-color: #171717;
            border-top: 1px solid #454545;
            height: 60px;
            position: relative;
            z-index: 1;
            order: 2;
        }

        .original_mobile-nav-button {
            flex: 1;
            background: #171717;
            border: none;
            padding: 15px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            color: #f6f5f5;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            position: relative;
        }

        .original_mobile-nav-button.original_active {
            color: white;
            background-color: #454545;
        }

        .original_mobile-nav-button.original_active svg path {
            stroke: white;
        }

        .original_mobile-nav-button:not(.original_active) {
            color: #f6f5f5;
            background-color: #171717;
        }

        .original_mobile-nav-button:not(.original_active) svg path {
            stroke: #f6f5f5;
        }

        .original_mobile-nav-button:not(.original_active):hover {
            background-color: #454545;
        }

        .original_mobile-nav-icon {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }

        .original_confirmation-modal,
        .original_feedback-modal {
            width: 95%;
            max-width: none;
        }

        .original_close-button {
            position: fixed;
            top: 15px;
            right: 15px;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .original_popup {
            top: 0;
            left: 0;
            transform: none;
        }
    }

    @media(min-width: 769px) {
        .original_mobile-nav {
            display: none;
        }

        .original_popup {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .original_chat-container {
            border-radius: 0 10px 10px 0;
        }
    }

    /* === LIGHT MODE === */
    @media (prefers-color-scheme: light) {
        .original_sidebar {
            background-color: #FFFFFF;
        }

        .original_sidebar-title {
            color: #222222;
        }

        .original_sidebar-widget.original_box,
        .original_sidebar-widget.original_adia {
            background-color: #C2305212;
        }

        .original_sidebar-widget.original_link {
            color: #C23052;
        }

        .original_widget-title {
            color: #C23052;
        }

        .original_widget-description {
            color: #171717;
        }

        .original_widget-arrow {
            fill: #171717;
        }

        .original_sidebar-bottom {
            background-color: #F1EFEF;
        }

        .original_sidebar-bottom-title {
            color: #222222;
        }

        .original_sidebar-bottom-description {
            color: #222222;
        }

        .original_mobile-nav {
            background-color: #f5f5f5;
            border-top: 1px solid #ddd;
        }

        .original_mobile-nav-button {
            background: #f5f5f5;
            color: #999;
        }

        .original_mobile-nav-button.original_active {
            background-color: #bf0d3e;
        }

        .original_mobile-nav-button:not(.original_active) {
            color: #999;
            background-color: #f5f5f5;
        }

        .original_mobile-nav-button:not(.original_active) svg path {
            stroke: #817B78;
        }

        .original_mobile-nav-button:not(.original_active):hover {
            background-color: #e8e8e8;
        }

        .original_confirmation-modal {
            background-color: #FFFFFF;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .original_confirmation-title {
            color: #222222;
        }

        .original_confirm-close {
            background-color: #C23052;
            color: white;
        }

        .original_confirm-close:hover {
            background-color: #bf0d3e;
        }

        .original_cancel-close {
            background-color: #F1EFEF;
            color: #222222;
        }

        .original_cancel-close:hover {
            background-color: #e8e8e8;
        }

        .original_feedback-modal {
            background-color: #FFFFFF;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .original_feedback-title {
            color: #222222;
        }

        .original_feedback-subtitle {
            color: #171717;
        }

        .original_feedback-rating-title {
            color: #222222;
        }

        .original_feedback-details-label {
            color: #222222;
        }

        .original_star {
            color: #e8e8e8;
        }

        .original_star.original_active {
            color: #C23052;
        }

        .original_feedback-textarea {
            border: 1px solid #e8e8e8;
            background-color: #FFFFFF;
            color: #222222;
        }

        .original_feedback-textarea:focus {
            border-color: #C23052;
            outline: none;
        }

        .original_feedback-submit {
            background-color: #C23052;
            color: white;
        }

        .original_feedback-submit:hover:not(:disabled) {
            background-color: #bf0d3e;
        }

        .original_feedback-submit:disabled {
            background-color: #e8e8e8;
            color: #999;
        }

        .original_feedback-skip {
            color: #171717;
        }

        .original_feedback-skip:hover {
            color: #C23052;
        }
    }

    /* === BODY NO SCROLL WHEN POPUP OPEN === */
    body.original_chat-widget-open {
        overflow: hidden !important;
        overscroll-behavior: contain;
    }
`;
        document.head.appendChild(style);
    }

    function generateSidebarHTML() {
        const sidebar = customizations?.otherParams?.sidebar;
        if (!sidebar) return '';

        const widgetsHTML = sidebar.widgets.map((widget, index) => {
            switch (widget.type) {
                case 'box':
                    return `
    <a href="javascript:void(0)" class="original_sidebar-widget original_box" data-widget-index="${index}">
                            <div class="original_widget-header">
                                <span class="original_widget-title original_box">${widget.title}</span>
                                <svg class="original_widget-arrow" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.59 10.59L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.59Z" />
                                </svg>
                            </div>
                            <p class="original_widget-description">${widget.description || ''}</p>
                        </a>
    `;
                case 'link':
                    return `
    <a href="javascript:void(0)" class="original_sidebar-widget original_link" data-widget-index="${index}">
        ${widget.title}
<svg class="original_widget-arrow" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.59 10.59L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.59Z" />
</svg>
                        </a>
    `;
                case 'adia':
                    return `
    <a href="javascript:void(0)" class="original_sidebar-widget original_adia" data-widget-index="${index}" title="${widget.onlineText || 'Consultant available'}">
                            <div class="original_widget-header">
                                <span class="original_widget-title original_adia original_online">${widget.title}</span>
                                <svg class="original_widget-arrow" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.59 10.59L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.59Z" />
                                </svg>
                            </div>
                            <p class="original_widget-description">${widget.description || ''}</p>
                            <div class="original_widget-status">
                                <svg class="original_status-icon original_online" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12.75C10.0375 12.75 10.9219 12.3844 11.6531 11.6531C12.3844 10.9219 12.75 10.0375 12.75 9C12.75 7.9625 12.3844 7.07812 11.6531 6.34688C10.9219 5.61562 10.0375 5.25 9 5.25C7.9625 5.25 7.07812 5.61562 6.34688 6.34688C5.61562 7.07812 5.25 7.9625 5.25 9C5.25 10.0375 5.61562 10.9219 6.34688 11.6531C7.07812 12.3844 7.9625 12.75 9 12.75ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9813 13.6313 14.3063 14.3063C13.6313 14.9813 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5ZM9 15C10.675 15 12.0938 14.4187 13.2563 13.2563C14.4187 12.0938 15 10.675 15 9C15 7.325 14.4187 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0938 4.74375 13.2563C5.90625 14.4187 7.325 15 9 15Z" fill="#249C0C"/>
                                </svg>
                                <span class="original_status-text original_online">Online</span>
                            </div>
                        </a>
    `;
                default:
                    return '';
            }
        }).join('');

        return `
    <div class="original_sidebar">
                <div class="original_sidebar-content">
                    <div class="original_sidebar-main">
                        <h2 class="original_sidebar-title">${sidebar.title}</h2>
                        <div class="original_sidebar-widgets">
                            ${widgetsHTML}
                        </div>
                    </div>
                    <div class="original_sidebar-bottom">
                        <h3 class="original_sidebar-bottom-title">${sidebar.bottomBox.title}</h3>
                        <p class="original_sidebar-bottom-description">${sidebar.bottomBox.description}</p>
                    </div>
                </div>
            </div>
    `;
    }

    function generateWidgetHTML() {
        return `
    <div id="original_chat-widget" class="original_chat-widget">
        <button id="original_chat-button" class="original_chat-button">
            ${config.chatButton}
            <span class="original_chat-badge">Beta</span>
        </button>
    </div>
    <div id="original_overlay" class="original_overlay"></div>
    <div id="original_popup" class="original_popup">
        <div class="original_popup-content">
            <button id="original_close-button" class="original_close-button">&times;</button>
            ${generateSidebarHTML()}
            <div class="original_chat-container">
                <div id="original_loader" class="original_loader"></div>
                <iframe id="original_chat-iframe" class="original_chat-iframe" frameborder="0" referrerpolicy="origin" allow="microphone *; camera *"></iframe>
            </div>
            <div class="original_mobile-nav">
                <button id="original_mobile-nav-chatbot" class="original_mobile-nav-button original_active">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.91667 8.00004H4.925M8.25 8.00004H8.25833M11.5833 8.00004H11.5917M15.75 8.00004C15.75 11.6819 12.3921 14.6667 8.25 14.6667C6.96728 14.6667 5.75976 14.3805 4.70389 13.8759L0.75 14.6667L1.91249 11.5667C1.1763 10.5353 0.75 9.31194 0.75 8.00004C0.75 4.31814 4.10786 1.33337 8.25 1.33337C12.3921 1.33337 15.75 4.31814 15.75 8.00004Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    ${config.mobileNavChatbotText}
                </button>
                <button id="original_mobile-nav-support" class="original_mobile-nav-button">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.60638 6.5C6.06398 5.52901 7.29869 4.83333 8.75004 4.83333C10.591 4.83333 12.0834 5.95262 12.0834 7.33333C12.0834 8.49953 11.0187 9.47923 9.57856 9.7555C9.12657 9.84221 8.75004 10.2064 8.75004 10.6667M8.75 13.1667H8.75833M16.25 9C16.25 13.1421 12.8921 16.5 8.75 16.5C4.60786 16.5 1.25 13.1421 1.25 9C1.25 4.85786 4.60786 1.5 8.75 1.5C12.8921 1.5 16.25 4.85786 16.25 9Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    ${config.mobileNavSupportText}
                </button>
            </div>
        </div>
    </div>
    <div id="original_confirmation-modal" class="original_confirmation-modal">
        <div class="original_confirmation-title">${config.confirmationText}</div>
        <div class="original_confirmation-buttons">
            <button id="original_confirm-close" class="original_confirmation-button original_confirm-close">${config.confirmationButtonText}</button>
            <button id="original_cancel-close" class="original_confirmation-button original_cancel-close">${config.confirmationCancelButtonText}</button>
        </div>
    </div>
    <div id="original_feedback-modal" class="original_feedback-modal">
        <div class="original_feedback-title">${config.feedbackTitle}</div>
        <div class="original_feedback-subtitle">${config.feedbackSubtitle}</div>
        <div class="original_feedback-rating-title">${config.feedbackRatingTitle}</div>
        <div class="original_star-rating-container">
            <div class="original_star-rating">
                <span class="original_star" data-value="1">★</span>
                <span class="original_star" data-value="2">★</span>
                <span class="original_star" data-value="3">★</span>
                <span class="original_star" data-value="4">★</span>
                <span class="original_star" data-value="5">★</span>
            </div>
        </div>
        <div class="original_feedback-details-label">${config.feedbackDetailsLabel}</div>
        <textarea class="original_feedback-textarea" placeholder=""></textarea>
        <div class="original_feedback-buttons">
            <button id="original_feedback-submit" class="original_feedback-submit" disabled>${config.feedbackSubmitButton}</button>
            <button id="original_feedback-skip" class="original_feedback-skip">${config.feedbackSkipButton}</button>
        </div>
    </div>
`;
    }

    class ChatWidget {
        constructor() {
            this.elements = {};
            this.conversationId = null;
            this.adiaIntervals = [];
            this.selectedRating = 0;
            this.currentMobileView = 'chatbot';
        }

        init() {
            this.cacheElements();
            this.attachEventListeners();
            this.initAdiaStatusChecking();
        }

        cacheElements() {
            const elementIds = [
                'original_chat-button', 'original_chat-iframe', 'original_overlay', 'original_popup', 'original_close-button',
                'original_loader', 'original_confirmation-modal', 'original_confirm-close', 'original_cancel-close',
                'original_feedback-modal', 'original_feedback-submit', 'original_feedback-skip',
                'original_mobile-nav-chatbot', 'original_mobile-nav-support'
            ];

            elementIds.forEach(id => {
                this.elements[id.replaceAll('-', '').replace('original_', '')] = document.getElementById(id);
            });

            this.elements.stars = document.querySelectorAll('.original_star');
            this.elements.feedbackTextarea = document.querySelector('.original_feedback-textarea');
            this.elements.sidebarWidgets = document.querySelectorAll('.original_sidebar-widget');
            this.elements.sidebar = document.querySelector('.original_sidebar');
            this.elements.chatContainer = document.querySelector('.original_chat-container');
        }

        attachEventListeners() {
            if (this.elements.chatbutton) {
                this.elements.chatbutton.addEventListener('click', () => this.openIframe(aiChatUrl));
            }

            if (this.elements.overlay) {
                this.elements.overlay.addEventListener('click', () => this.showConfirmation());
            }
            if (this.elements.closebutton) {
                this.elements.closebutton.addEventListener('click', () => this.showConfirmation());
            }

            if (this.elements.confirmclose) {
                this.elements.confirmclose.addEventListener('click', () => this.showFeedback());
            }
            if (this.elements.cancelclose) {
                this.elements.cancelclose.addEventListener('click', () => this.cancelClose());
            }

            if (this.elements.feedbacksubmit) {
                this.elements.feedbacksubmit.addEventListener('click', () => this.submitFeedback());
            }
            if (this.elements.feedbackskip) {
                this.elements.feedbackskip.addEventListener('click', () => this.skipFeedback());
            }

            if (this.elements.stars) {
                this.elements.stars.forEach(star => {
                    star.addEventListener('click', (e) => this.handleStarClick(e));
                    star.addEventListener('mouseover', (e) => this.handleStarHover(e));
                    star.addEventListener('mouseout', () => this.handleStarHoverOut());
                });
            }

            if (this.elements.sidebarWidgets) {
                this.elements.sidebarWidgets.forEach(widget => {
                    widget.addEventListener('click', (e) => this.handleSidebarWidgetClick(e));
                });
            }

            if (this.elements.mobilenavchatbot) {
                this.elements.mobilenavchatbot.addEventListener('click', () => this.switchMobileView('chatbot'));
            }
            if (this.elements.mobilenavsupport) {
                this.elements.mobilenavsupport.addEventListener('click', () => this.switchMobileView('support'));
            }

            if (this.elements.chatiframe) {
                this.elements.chatiframe.addEventListener('load', () => {
                    this.hideLoader();
                    this.injectIframeViewportMeta();
                });
            }
            window.addEventListener('message', (e) => this.handlePostMessage(e));
        }

        initAdiaStatusChecking() {
            const sidebar = customizations?.otherParams?.sidebar;
            if (!sidebar) return;

            sidebar.widgets.forEach((widget, index) => {
                if (widget.type === 'adia') {
                    this.checkAdiaStatus(index);
                    const interval = setInterval(() => this.checkAdiaStatus(index), 30000);
                    this.adiaIntervals.push(interval);
                }
            });
        }

        async checkAdiaStatus(widgetIndex) {
            const widgetElement = document.querySelector(`[data-widget-index="${widgetIndex}"]`);
            if (!widgetElement) return;

            try {
                const response = await fetch('https_lugano');
                const data = await response.json();
                const isOnline = data?.serviceState?.all && data?.serviceState?.all?.[7] > 0;
                this.updateAdiaWidget(widgetElement, widgetIndex, isOnline);
            } catch (error) {
                console.warn('Failed to check ADIA status:', error);
                this.updateAdiaWidget(widgetElement, widgetIndex, false);
            }
        }

        updateAdiaWidget(widgetElement, widgetIndex, isOnline) {
            const statusIcon = widgetElement.querySelector('.original_status-icon');
            const statusText = widgetElement.querySelector('.original_status-text');
            const widgetTitle = widgetElement.querySelector('.original_widget-title');
            const sidebar = customizations?.otherParams?.sidebar;
            const widget = sidebar.widgets[widgetIndex];

            if (isOnline) {
                widgetElement.classList.remove('original_offline');
                statusIcon.classList.remove('original_offline');
                statusIcon.classList.add('original_online');
                statusText.classList.remove('original_offline');
                statusText.classList.add('original_online');
                statusText.textContent = 'Online';
                widgetTitle.classList.remove('original_offline');
                widgetTitle.classList.add('original_online');
                widgetElement.title = widget.onlineText || 'Consultant available';
            } else {
                widgetElement.classList.add('original_offline');
                statusIcon.classList.remove('original_online');
                statusIcon.classList.add('original_offline');
                statusText.classList.remove('original_online');
                statusText.classList.add('original_offline');
                statusText.textContent = 'Offline';
                widgetTitle.classList.remove('original_online');
                widgetTitle.classList.add('original_offline');
                widgetElement.title = widget.offlineText || 'Consultant not available';
            }
        }

        handleSidebarWidgetClick(event) {
            event.preventDefault();

            const widgetIndex = parseInt(event.currentTarget.dataset.widgetIndex);
            const sidebar = customizations?.otherParams?.sidebar;
            if (!sidebar || !sidebar.widgets[widgetIndex]) return;

            const widget = sidebar.widgets[widgetIndex];

            if (widget.type === 'adia' && event.currentTarget.classList.contains('original_offline')) {
                return;
            }

            if (widget.target === 'internal') {
                this.openIframe(consultationUrl);
            } else if (widget.target === '_blank') {
                window.open(widget.url, '_blank');
            } else {
                window.location.href = widget.url;
            }
        }

        openIframe(url) {
            this.showLoader();
            document.body.classList.add('original_chat-widget-open');
            this.elements.chatiframe.src = url;
            this.showModal(this.elements.overlay, this.elements.popup);
        }

        closePopup() {
            this.clearAdiaIntervals();
            this.resetFeedbackForm();
            this.resetMobileView();
            this.hideModal(this.elements.overlay, this.elements.popup, () => {
                this.elements.chatiframe.src = '';
                this.hideLoader();
                document.body.classList.remove('original_chat-widget-open');
            });
        }

        showConfirmation() {
            if (this.elements.feedbackmodal && this.elements.feedbackmodal.classList.contains('original_show')) return;
            this.showModal(this.elements.confirmationmodal);
        }

        showFeedback() {
            this.hideModal(this.elements.confirmationmodal, null, () => {
                if (!this.conversationId) {
                    this.closePopup();
                    return;
                }
                if (this.elements.feedbackTextarea) {
                    this.elements.feedbackTextarea.value = '';
                }
                this.setRating(0);
                this.showModal(this.elements.feedbackmodal);
            });
        }

        submitFeedback() {
            const rating = this.selectedRating;
            const text = this.elements.feedbackTextarea ? this.elements.feedbackTextarea.value : '';

            fetch(feedbackUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'bot_GekXRY0U7FHG9dpHYm5dE0NbMhWbHZxF'
                },
                body: JSON.stringify({
                    conversationId: this.conversationId,
                    rating,
                    text
                })
            })
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    console.log('Feedback submitted successfully');
                })
                .catch(error => {
                    console.error('Error submitting feedback:', error);
                })
                .finally(() => {
                    this.hideFeedbackAndClose();
                });
        }

        skipFeedback() {
            this.hideFeedbackAndClose();
        }

        hideFeedbackAndClose() {
            this.hideModal(this.elements.feedbackmodal, null, () => this.closePopup());
        }

        cancelClose() {
            this.hideModal(this.elements.confirmationmodal);
        }

        handleStarClick(e) {
            const value = parseInt(e.target.dataset.value);
            this.setRating(value);
        }

        handleStarHover(e) {
            const value = parseInt(e.target.dataset.value);
            this.highlightStars(value);
        }

        handleStarHoverOut() {
            this.highlightStars(this.selectedRating);
        }

        setRating(value) {
            this.selectedRating = value;
            if (this.elements.stars) {
                this.elements.stars.forEach(star => {
                    const starValue = parseInt(star.dataset.value);
                    star.classList.toggle('original_active', starValue <= value);
                });
            }
            if (this.elements.feedbacksubmit) {
                this.elements.feedbacksubmit.disabled = value === 0;
            }
        }

        highlightStars(value) {
            if (this.elements.stars) {
                this.elements.stars.forEach(star => {
                    const starValue = parseInt(star.dataset.value);
                    star.style.color = starValue <= value ? '#000' : '#e0e0e0';
                });
            }
        }

        handlePostMessage(event) {
            const { data } = event;

            if (data?.type === 'widget_click_internal') {
                this.openIframe(consultationUrl);
            } else if (data?.type === 'widget_click') {
                window.location.href = data.url;
            } else if (data?.type === 'conversation_id') {
                this.conversationId = data.conversationId;
            }
        }

        showLoader() {
            if (this.elements.loader) {
                this.elements.loader.style.display = 'block';
            }
            if (this.elements.chatiframe) {
                this.elements.chatiframe.style.opacity = '0';
            }
        }

        hideLoader() {
            if (this.elements.loader) {
                this.elements.loader.style.display = 'none';
            }
            if (this.elements.chatiframe) {
                this.elements.chatiframe.style.opacity = '1';
            }
        }

        showModal(modal, popup = null) {
            if (popup) {
                modal.style.display = 'block';
                popup.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('original_show');
                    popup.classList.add('original_show');
                }, 10);
            } else {
                modal.style.display = 'block';
                setTimeout(() => modal.classList.add('original_show'), 10);
            }
        }

        hideModal(modal, popup = null, callback = null) {
            modal.classList.remove('original_show');
            modal.classList.add('original_hide');

            if (popup) {
                popup.classList.remove('original_show');
                popup.classList.add('original_hide');
            }

            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('original_hide');

                if (popup) {
                    popup.style.display = 'none';
                    popup.classList.remove('original_hide');
                }

                if (callback) callback();
            }, 300);
        }

        resetFeedbackForm() {
            this.conversationId = null;
            if (this.elements.feedbackTextarea) {
                this.elements.feedbackTextarea.value = '';
            }
            this.setRating(0);
        }

        clearAdiaIntervals() {
            this.adiaIntervals.forEach(interval => clearInterval(interval));
            this.adiaIntervals = [];
        }

        switchMobileView(view) {
            this.currentMobileView = view;

            if (this.elements.mobilenavchatbot) {
                this.elements.mobilenavchatbot.classList.toggle('original_active', view === 'chatbot');
            }
            if (this.elements.mobilenavsupport) {
                this.elements.mobilenavsupport.classList.toggle('original_active', view === 'support');
            }

            if (this.elements.chatContainer) {
                this.elements.chatContainer.classList.toggle('original_mobile-hidden', view === 'support');
            }
            if (this.elements.sidebar) {
                this.elements.sidebar.classList.toggle('original_mobile-active', view === 'support');
            }
        }

        resetMobileView() {
            this.currentMobileView = 'chatbot';

            if (this.elements.mobilenavchatbot) {
                this.elements.mobilenavchatbot.classList.add('original_active');
            }
            if (this.elements.mobilenavsupport) {
                this.elements.mobilenavsupport.classList.remove('original_active');
            }

            if (this.elements.chatContainer) {
                this.elements.chatContainer.classList.remove('original_mobile-hidden');
            }
            if (this.elements.sidebar) {
                this.elements.sidebar.classList.remove('original_mobile-active');
            }
        }

        injectIframeViewportMeta() {
            try {
                if (this.elements.chatiframe && this.elements.chatiframe.contentDocument) {
                    const iframeDoc = this.elements.chatiframe.contentDocument;
                    let meta = iframeDoc.querySelector('meta[name="viewport"]');

                    if (!meta) {
                        meta = iframeDoc.createElement('meta');
                        meta.name = 'viewport';
                        meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
                        iframeDoc.head.appendChild(meta);
                    } else {
                        const current = meta.getAttribute('content') || '';
                        const pieces = current.split(',').map(p => p.trim());
                        const filtered = pieces.filter(p => !p.startsWith('maximum-scale') && !p.startsWith('user-scalable'));
                        filtered.push('maximum-scale=1');
                        filtered.push('user-scalable=no');
                        meta.setAttribute('content', filtered.join(', '));
                    }
                }
            } catch (error) {
                console.debug('Cannot inject viewport meta into iframe due to cross-origin restrictions');
            }
        }
    }

    function initializeWidget() {
        const setViewportHeight = () => {
            const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            const vh = viewportHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + 'px');
        };
        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);
        window.addEventListener('orientationchange', setViewportHeight);

        const ensureViewportMeta = () => {
            let meta = document.querySelector('meta[name="viewport"]');
            if (!meta) {
                meta = document.createElement('meta');
                meta.name = 'viewport';
                meta.content = 'width=device-width, initial-scale=1, interactive-widget=resizes-content';
                document.head.appendChild(meta);
            } else {
                const current = meta.getAttribute('content') || '';
                const pieces = current.split(',').map(p => p.trim());
                const filtered = pieces.filter(p => !p.startsWith('interactive-widget'));
                filtered.push('interactive-widget=resizes-content');
                meta.setAttribute('content', filtered.join(', '));
            }
        };
        ensureViewportMeta();

        injectStyles();
        document.body.insertAdjacentHTML('beforeend', generateWidgetHTML());
        const chatWidget = new ChatWidget();
        chatWidget.init();
        window.chatWidget = chatWidget;
    }

    initializeWidget();
})();
