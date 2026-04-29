const translations = {
  "zh-Hans": {
    meta: {
      title: "GrepFiles - macOS 本地文件内容搜索与安全替换工具",
      description: "GrepFiles 是一款面向 macOS 的本地文件内容搜索工具，支持普通文本、正则、批量替换预览、结果复制导出、搜索预设和历史记录。"
    },
    header: { aria: "站点导航" },
    brand: { aria: "GrepFiles 首页" },
    nav: { aria: "主要导航", features: "功能", screenshots: "截图", privacy: "隐私", purchase: "购买" },
    language: { label: "语言", aria: "选择语言" },
    cta: { buy: "获取购买方式" },
    mailSubject: "GrepFiles 购买咨询",
    hero: {
      eyebrow: "macOS 本地搜索工具",
      lead: "把 grep 的力量变成清爽的 Mac 应用。搜索源码、日志、配置、笔记和文档，精确定位内容，安全预览替换，所有处理都留在你的 Mac 上。",
      actionsAria: "主要操作",
      primaryAction: "立即购买咨询",
      secondaryAction: "查看产品截图",
      factsAria: "产品亮点",
      fact1Label: "搜索模式",
      fact1Value: "普通文本 / 正则",
      fact2Label: "导出格式",
      fact2Value: "Markdown / CSV / JSON / TXT",
      fact3Label: "隐私方式",
      fact3Value: "本机处理，不上传文件"
    },
    intro: {
      kicker: "为高频文件检索而生",
      title: "少一点终端试错，多一点结果掌控。",
      text: "GrepFiles 适合开发者、技术写作者、QA、内容维护者和任何需要在大量文本文件里快速定位内容的人。它保留 grep 的精确性，同时补上图形界面、历史记录、导出报告和可确认的批量替换。"
    },
    workflow: {
      kicker: "日常工作流",
      title: "从导入目录到交付结果，一条线完成。",
      text: "不需要记复杂参数，也不用在终端输出里来回翻找。GrepFiles 把常用搜索、筛选、复制、导出和替换动作整理成可见、可复用、可确认的流程。",
      stepsAria: "工作流步骤"
    },
    steps: [
      { title: "导入文件夹", text: "选择一个或多个本地目录，应用会保存 macOS 安全书签，下次启动仍可继续访问。" },
      { title: "输入查询", text: "用普通文本快速查找固定内容，或切换正则表达式处理更复杂的匹配规则。" },
      { title: "缩小范围", text: "按大小写、完整单词、反向匹配、行首行尾、文件后缀和排除目录精确过滤。" },
      { title: "复制、导出或替换", text: "复制匹配文本、整行或文件位置，导出报告，或先预览再批量写入替换。" }
    ],
    features: {
      kicker: "完整功能",
      title: "专业搜索需要的控制项，都在手边。",
      text: "从一次性搜索到长期维护项目，GrepFiles 都能覆盖常见场景，并尽量减少误操作成本。"
    },
    featureItems: [
      { title: "普通文本与正则", text: "固定关键词、日志片段、配置键适合普通模式；复杂模式可用正则表达式和捕获组。" },
      { title: "三种结果形式", text: "查看匹配行、只看匹配内容，或只输出命中文件路径，覆盖阅读、统计和清单整理。" },
      { title: "可保存搜索预设", text: "把查询、模式、文件夹范围、排除目录、包含后缀和结果形式保存为可复用配置。" },
      { title: "搜索历史快照", text: "最近搜索会保留查询、结果、路径和高亮范围，回看历史时无需重新跑一遍搜索。" },
      { title: "安全批量替换", text: "替换前按文件和匹配项预览，可逐项勾选；写入前会检查文件是否被外部修改。" },
      { title: "复制与导出报告", text: "一键复制匹配文本、整行、文件路径加行号，并导出 Markdown、CSV、JSON 或纯文本。" },
      { title: "后缀与排除规则", text: "只搜索指定后缀，跳过构建目录、依赖目录和自定义目录，让结果更干净。" },
      { title: "支持文档正文搜索", text: "在 macOS 可提取正文时，`.docx` 也可以纳入只读搜索范围，适合文档资产检索。" }
    ],
    screenshots: {
      kicker: "真实界面截图",
      title: "看得见结果，也看得见风险。",
      text: "页面使用应用现有截图素材制作，展示搜索、正则、替换预览、历史、预设和帮助等核心视图。"
    },
    gallery: {
      tabsAria: "截图切换",
      tabs: { plain: "普通搜索", regex: "正则搜索", replace: "替换预览", history: "历史记录" },
      items: {
        plain: {
          title: "普通搜索：快速找到上下文",
          text: "导入多个目录后输入关键词，即可按文件分组查看匹配行、行号和高亮范围。适合源码、日志、笔记和配置文件的日常检索。",
          image: "assets/screenshots/plain-search.jpg",
          alt: "GrepFiles 普通搜索视图，展示关键词搜索结果、高亮匹配和文件分组"
        },
        regex: {
          title: "正则搜索：处理复杂模式",
          text: "使用正则表达式查找多个候选词、结构化日志和特定边界内容。无效正则会给出错误提示，不会中断应用。",
          image: "assets/screenshots/regex-search.jpg",
          alt: "GrepFiles 正则表达式搜索视图，展示正则查询和匹配结果"
        },
        replace: {
          title: "替换预览：确认之后再写入",
          text: "批量替换前先看到每个文件、每一处匹配的替换前后内容。你可以只勾选真正要修改的部分。",
          image: "assets/screenshots/replace-preview.jpg",
          alt: "GrepFiles 替换预览视图，展示可勾选的替换候选项"
        },
        history: {
          title: "历史记录：回看已经完成的搜索",
          text: "搜索历史会保存查询、选项、文件摘要和结果快照。再次打开历史项时，可以按当时的结果继续查看。",
          image: "assets/screenshots/history.jpg",
          alt: "GrepFiles 历史搜索视图，展示历史项和搜索结果快照"
        }
      }
    },
    shots: [
      { title: "把高频任务保存下来", text: "搜索预设会记住查询、模式、文件夹范围、后缀和排除项。每天都要跑的检查，下一次不用从头配置。", alt: "GrepFiles 保存预设视图" },
      { title: "大量结果也能保持秩序", text: "结果按文件分组，可展开或折叠，文件标题显示来源目录和匹配数量，方便快速扫描。", alt: "GrepFiles 折叠搜索结果视图" },
      { title: "内置帮助，降低上手成本", text: "搜索、替换、导出、排除规则、隐私与安全都有说明，新用户也能快速建立正确使用方式。", alt: "GrepFiles 帮助视图" }
    ],
    privacy: {
      kicker: "隐私与安全",
      title: "你的文件，只在你的 Mac 上被处理。",
      text: "GrepFiles 的搜索和帮助功能不需要网络连接，不会把查询、路径或文件内容发送到服务器。导入目录通过 macOS 沙盒授权，移除目录不会删除磁盘文件。",
      safetyAria: "安全机制"
    },
    safetyItems: [
      { title: "替换前必须预览", text: "批量替换会先展示替换前后内容，并允许按文件或单个匹配项勾选。" },
      { title: "写入前再次校验", text: "应用会检查文件大小、修改时间、内容指纹和原匹配文本，避免覆盖外部改动。" },
      { title: "会话内撤销快照", text: "最近一次成功替换会保留内存撤销快照，降低批量修改带来的心理负担。" }
    ],
    audience: {
      kicker: "适合购买的人",
      title: "当搜索是日常工作的一部分，GrepFiles 会很快回本。",
      text: "它不是一次性的炫技工具，而是每天都能减少上下文切换的生产力工具。"
    },
    audienceItems: [
      { title: "开发者", text: "在代码库里查找 API、配置键、错误文案和历史遗留逻辑，结果可直接定位到文件。" },
      { title: "技术写作者", text: "批量检查术语、标题、链接片段和版本号，导出报告方便审阅与交付。" },
      { title: "QA 与支持团队", text: "快速检索日志、测试数据和说明文档，按路径和行号把证据整理清楚。" },
      { title: "内容维护者", text: "在多个项目目录中统一查找和替换文本，先确认影响范围再写入文件。" }
    ],
    purchase: {
      kicker: "购买理由",
      title: "把“找文件内容”这件小事，变成稳定可靠的工作流。",
      text: "如果你经常在源码、日志、配置和文档之间来回搜索，GrepFiles 能把零散命令、临时脚本和复制粘贴整理成一个清楚的 Mac 应用。",
      panelTitle: "你将获得",
      bullets: [
        "本地文件内容搜索与多目录管理",
        "普通文本、正则、完整单词、反向匹配和行位置控制",
        "可选择的批量替换预览与会话内撤销",
        "搜索预设、历史快照、复制和多格式导出",
        "面向 macOS 沙盒的本地隐私与授权机制"
      ]
    },
    faq: { kicker: "常见问题", title: "购买前你可能想确认这些。" },
    faqItems: [
      { question: "GrepFiles 会上传我的文件吗？", answer: "不会。搜索在本机完成，查询、路径和文件内容不会发送到服务器。" },
      { question: "可以批量替换吗？", answer: "可以。先完成搜索，再准备替换预览；你可以按文件或匹配项勾选，确认后才会写入。" },
      { question: "搜索结果能导出吗？", answer: "可以导出为 Markdown、CSV、JSON 或纯文本，也可以复制匹配文本、整行或文件路径加行号。" },
      { question: "可以只搜索某些文件类型吗？", answer: "可以添加包含后缀，例如 `.swift`、`.md` 或 `.docx`。列表为空时会搜索所有未被规则跳过的可读文本文件。" }
    ],
    footer: { text: "macOS 本地文件内容搜索与安全替换工具。", top: "回到顶部" }
  },
  "zh-Hant": {
    meta: {
      title: "GrepFiles - macOS 本機檔案內容搜尋與安全取代工具",
      description: "GrepFiles 是一款面向 macOS 的本機檔案內容搜尋工具，支援純文字、正則、批次取代預覽、結果複製匯出、搜尋預設和歷史記錄。"
    },
    header: { aria: "網站導覽" },
    brand: { aria: "GrepFiles 首頁" },
    nav: { aria: "主要導覽", features: "功能", screenshots: "截圖", privacy: "隱私", purchase: "購買" },
    language: { label: "語言", aria: "選擇語言" },
    cta: { buy: "取得購買方式" },
    mailSubject: "GrepFiles 購買諮詢",
    hero: {
      eyebrow: "macOS 本機搜尋工具",
      lead: "把 grep 的力量變成清爽的 Mac 應用程式。搜尋原始碼、日誌、設定、筆記和文件，精準定位內容，安全預覽取代，所有處理都留在你的 Mac 上。",
      actionsAria: "主要操作",
      primaryAction: "立即購買諮詢",
      secondaryAction: "查看產品截圖",
      factsAria: "產品亮點",
      fact1Label: "搜尋模式",
      fact1Value: "純文字 / 正則",
      fact2Label: "匯出格式",
      fact2Value: "Markdown / CSV / JSON / TXT",
      fact3Label: "隱私方式",
      fact3Value: "本機處理，不上傳檔案"
    },
    intro: {
      kicker: "為高頻檔案檢索而生",
      title: "少一點終端機試錯，多一點結果掌控。",
      text: "GrepFiles 適合開發者、技術寫作者、QA、內容維護者，以及任何需要在大量文字檔案中快速定位內容的人。它保留 grep 的精確性，同時補上圖形介面、歷史記錄、匯出報告和可確認的批次取代。"
    },
    workflow: {
      kicker: "日常工作流程",
      title: "從匯入目錄到交付結果，一條線完成。",
      text: "不需要記複雜參數，也不用在終端機輸出裡來回翻找。GrepFiles 把常用搜尋、篩選、複製、匯出和取代動作整理成可見、可重用、可確認的流程。",
      stepsAria: "工作流程步驟"
    },
    steps: [
      { title: "匯入資料夾", text: "選擇一個或多個本機目錄，應用程式會保存 macOS 安全書籤，下次啟動仍可繼續存取。" },
      { title: "輸入查詢", text: "用純文字快速查找固定內容，或切換正則表示式處理更複雜的匹配規則。" },
      { title: "縮小範圍", text: "依大小寫、完整單字、反向匹配、行首行尾、檔案副檔名和排除目錄精確過濾。" },
      { title: "複製、匯出或取代", text: "複製匹配文字、整行或檔案位置，匯出報告，或先預覽再批次寫入取代。" }
    ],
    features: {
      kicker: "完整功能",
      title: "專業搜尋需要的控制項，都在手邊。",
      text: "從一次性搜尋到長期維護專案，GrepFiles 都能覆蓋常見場景，並盡量減少誤操作成本。"
    },
    featureItems: [
      { title: "純文字與正則", text: "固定關鍵字、日誌片段、設定鍵適合純文字模式；複雜模式可用正則表示式和擷取群組。" },
      { title: "三種結果形式", text: "查看匹配行、只看匹配內容，或只輸出命中的檔案路徑，覆蓋閱讀、統計和清單整理。" },
      { title: "可保存搜尋預設", text: "把查詢、模式、資料夾範圍、排除目錄、包含副檔名和結果形式保存為可重用設定。" },
      { title: "搜尋歷史快照", text: "最近搜尋會保留查詢、結果、路徑和醒目提示範圍，回看歷史時無需重新搜尋。" },
      { title: "安全批次取代", text: "取代前按檔案和匹配項預覽，可逐項勾選；寫入前會檢查檔案是否被外部修改。" },
      { title: "複製與匯出報告", text: "一鍵複製匹配文字、整行、檔案路徑加行號，並匯出 Markdown、CSV、JSON 或純文字。" },
      { title: "副檔名與排除規則", text: "只搜尋指定副檔名，跳過建置目錄、依賴目錄和自訂目錄，讓結果更乾淨。" },
      { title: "支援文件正文搜尋", text: "在 macOS 可擷取正文時，`.docx` 也可以納入唯讀搜尋範圍，適合文件資產檢索。" }
    ],
    screenshots: {
      kicker: "真實介面截圖",
      title: "看得見結果，也看得見風險。",
      text: "頁面使用應用程式現有截圖素材製作，展示搜尋、正則、取代預覽、歷史、預設和說明等核心視圖。"
    },
    gallery: {
      tabsAria: "截圖切換",
      tabs: { plain: "普通搜尋", regex: "正則搜尋", replace: "取代預覽", history: "歷史記錄" },
      items: {
        plain: { title: "普通搜尋：快速找到上下文", text: "匯入多個目錄後輸入關鍵字，即可按檔案分組查看匹配行、行號和醒目提示範圍。適合原始碼、日誌、筆記和設定檔的日常檢索。", image: "assets/screenshots/plain-search.jpg", alt: "GrepFiles 普通搜尋視圖，展示關鍵字搜尋結果、醒目提示和檔案分組" },
        regex: { title: "正則搜尋：處理複雜模式", text: "使用正則表示式查找多個候選詞、結構化日誌和特定邊界內容。無效正則會給出錯誤提示，不會中斷應用程式。", image: "assets/screenshots/regex-search.jpg", alt: "GrepFiles 正則表示式搜尋視圖，展示正則查詢和匹配結果" },
        replace: { title: "取代預覽：確認之後再寫入", text: "批次取代前先看到每個檔案、每一處匹配的取代前後內容。你可以只勾選真正要修改的部分。", image: "assets/screenshots/replace-preview.jpg", alt: "GrepFiles 取代預覽視圖，展示可勾選的取代候選項" },
        history: { title: "歷史記錄：回看已完成的搜尋", text: "搜尋歷史會保存查詢、選項、檔案摘要和結果快照。再次打開歷史項時，可以按當時的結果繼續查看。", image: "assets/screenshots/history.jpg", alt: "GrepFiles 歷史搜尋視圖，展示歷史項和搜尋結果快照" }
      }
    },
    shots: [
      { title: "把高頻任務保存下來", text: "搜尋預設會記住查詢、模式、資料夾範圍、副檔名和排除項。每天都要跑的檢查，下一次不用從頭設定。", alt: "GrepFiles 保存預設視圖" },
      { title: "大量結果也能保持秩序", text: "結果按檔案分組，可展開或摺疊，檔案標題顯示來源目錄和匹配數量，方便快速掃描。", alt: "GrepFiles 摺疊搜尋結果視圖" },
      { title: "內建說明，降低上手成本", text: "搜尋、取代、匯出、排除規則、隱私與安全都有說明，新使用者也能快速建立正確使用方式。", alt: "GrepFiles 說明視圖" }
    ],
    privacy: {
      kicker: "隱私與安全",
      title: "你的檔案，只在你的 Mac 上被處理。",
      text: "GrepFiles 的搜尋和說明功能不需要網路連線，不會把查詢、路徑或檔案內容發送到伺服器。匯入目錄透過 macOS 沙盒授權，移除目錄不會刪除磁碟檔案。",
      safetyAria: "安全機制"
    },
    safetyItems: [
      { title: "取代前必須預覽", text: "批次取代會先展示取代前後內容，並允許按檔案或單個匹配項勾選。" },
      { title: "寫入前再次校驗", text: "應用程式會檢查檔案大小、修改時間、內容指紋和原匹配文字，避免覆蓋外部改動。" },
      { title: "工作階段內撤銷快照", text: "最近一次成功取代會保留記憶體撤銷快照，降低批次修改帶來的心理負擔。" }
    ],
    audience: {
      kicker: "適合購買的人",
      title: "當搜尋是日常工作的一部分，GrepFiles 會很快回本。",
      text: "它不是一次性的炫技工具，而是每天都能減少上下文切換的生產力工具。"
    },
    audienceItems: [
      { title: "開發者", text: "在程式碼庫裡查找 API、設定鍵、錯誤文案和歷史遺留邏輯，結果可直接定位到檔案。" },
      { title: "技術寫作者", text: "批次檢查術語、標題、連結片段和版本號，匯出報告方便審閱與交付。" },
      { title: "QA 與支援團隊", text: "快速檢索日誌、測試資料和說明文件，按路徑和行號把證據整理清楚。" },
      { title: "內容維護者", text: "在多個專案目錄中統一查找和取代文字，先確認影響範圍再寫入檔案。" }
    ],
    purchase: {
      kicker: "購買理由",
      title: "把「找檔案內容」這件小事，變成穩定可靠的工作流程。",
      text: "如果你經常在原始碼、日誌、設定和文件之間來回搜尋，GrepFiles 能把零散命令、臨時腳本和複製貼上整理成一個清楚的 Mac 應用程式。",
      panelTitle: "你將獲得",
      bullets: [
        "本機檔案內容搜尋與多目錄管理",
        "純文字、正則、完整單字、反向匹配和行位置控制",
        "可選擇的批次取代預覽與工作階段內撤銷",
        "搜尋預設、歷史快照、複製和多格式匯出",
        "面向 macOS 沙盒的本機隱私與授權機制"
      ]
    },
    faq: { kicker: "常見問題", title: "購買前你可能想確認這些。" },
    faqItems: [
      { question: "GrepFiles 會上傳我的檔案嗎？", answer: "不會。搜尋在本機完成，查詢、路徑和檔案內容不會發送到伺服器。" },
      { question: "可以批次取代嗎？", answer: "可以。先完成搜尋，再準備取代預覽；你可以按檔案或匹配項勾選，確認後才會寫入。" },
      { question: "搜尋結果能匯出嗎？", answer: "可以匯出為 Markdown、CSV、JSON 或純文字，也可以複製匹配文字、整行或檔案路徑加行號。" },
      { question: "可以只搜尋某些檔案類型嗎？", answer: "可以新增包含副檔名，例如 `.swift`、`.md` 或 `.docx`。列表為空時會搜尋所有未被規則跳過的可讀文字檔案。" }
    ],
    footer: { text: "macOS 本機檔案內容搜尋與安全取代工具。", top: "回到頂部" }
  }
};

Object.assign(translations, {
  en: buildLocale({
    meta: {
      title: "GrepFiles - Local file search and safe replacement for macOS",
      description: "GrepFiles is a local macOS file-content search tool with plain text search, regex, replacement previews, export, presets, and history."
    },
    header: { aria: "Site navigation" },
    brand: { aria: "GrepFiles home" },
    nav: { aria: "Main navigation", features: "Features", screenshots: "Screenshots", privacy: "Privacy", purchase: "Buy" },
    language: { label: "Language", aria: "Choose language" },
    cta: { buy: "Get purchase details" },
    mailSubject: "GrepFiles purchase inquiry",
    hero: {
      eyebrow: "Local search for macOS",
      lead: "Turn the power of grep into a clean Mac app. Search source code, logs, configs, notes, and documents, pinpoint content, preview replacements safely, and keep every operation on your Mac.",
      actionsAria: "Primary actions",
      primaryAction: "Ask about buying",
      secondaryAction: "View screenshots",
      factsAria: "Product highlights",
      fact1Label: "Search modes",
      fact1Value: "Plain text / Regex",
      fact2Label: "Export formats",
      fact2Value: "Markdown / CSV / JSON / TXT",
      fact3Label: "Privacy model",
      fact3Value: "Local processing, no uploads"
    },
    intro: {
      kicker: "Built for frequent file lookup",
      title: "Less terminal trial and error. More control over results.",
      text: "GrepFiles is made for developers, technical writers, QA teams, content maintainers, and anyone who needs to find text quickly across many files. It keeps grep's precision while adding a graphical interface, history, exportable reports, and confirmable batch replacement."
    },
    workflow: {
      kicker: "Daily workflow",
      title: "From imported folders to deliverable results in one flow.",
      text: "No need to memorize complex flags or dig through terminal output. GrepFiles turns search, filtering, copying, exporting, and replacement into a visible, reusable, and confirmable workflow.",
      stepsAria: "Workflow steps"
    },
    steps: [
      { title: "Import folders", text: "Choose one or more local folders. GrepFiles stores macOS security bookmarks so access remains available after restart." },
      { title: "Enter a query", text: "Use plain text for fixed strings, or switch to regular expressions for more complex matching rules." },
      { title: "Narrow the scope", text: "Filter by case, whole words, inverted matches, line boundaries, file extensions, and excluded directories." },
      { title: "Copy, export, or replace", text: "Copy matched text, whole lines, or file locations, export reports, or preview before batch replacement." }
    ],
    features: {
      kicker: "Complete feature set",
      title: "The controls professional search needs, close at hand.",
      text: "From one-off lookups to long-running maintenance work, GrepFiles covers common scenarios while reducing the cost of mistakes."
    },
    featureItems: [
      { title: "Plain text and regex", text: "Use plain text for keywords, log snippets, and config keys; use regex and capture groups for complex patterns." },
      { title: "Three result views", text: "Review matching lines, matching text only, or matching file paths for reading, counting, and list building." },
      { title: "Saved search presets", text: "Save queries, modes, folder scope, exclusions, included extensions, and result views as reusable presets." },
      { title: "Search history snapshots", text: "Recent searches keep the query, results, paths, and highlight ranges so you can review without rerunning." },
      { title: "Safe batch replacement", text: "Preview by file and match, select only what you need, and check for external file changes before writing." },
      { title: "Copy and export reports", text: "Copy matched text, whole lines, or file paths with line numbers, and export Markdown, CSV, JSON, or plain text." },
      { title: "Extensions and exclusions", text: "Search only selected extensions and skip build, dependency, or custom directories for cleaner results." },
      { title: "Document body search", text: "When macOS can extract text, `.docx` files can be included in read-only search for document assets." }
    ],
    screenshots: { kicker: "Real app screenshots", title: "See the results, and see the risks.", text: "The page uses existing app screenshots to show search, regex, replacement preview, history, presets, and help views." },
    gallery: galleryText({
      tabsAria: "Screenshot switcher",
      tabs: { plain: "Plain search", regex: "Regex search", replace: "Replacement preview", history: "History" },
      plainTitle: "Plain search: find context fast",
      plainText: "Import multiple folders, enter a keyword, and review matching lines, line numbers, and highlights grouped by file. Ideal for source code, logs, notes, and configs.",
      regexTitle: "Regex search: handle complex patterns",
      regexText: "Use regular expressions to find alternatives, structured logs, and boundary-specific content. Invalid regex patterns show errors without crashing the app.",
      replaceTitle: "Replacement preview: write only after review",
      replaceText: "Before batch replacement, see every file and every before/after match. Select only the changes you actually want.",
      historyTitle: "History: revisit completed searches",
      historyText: "Search history stores queries, options, file summaries, and result snapshots so you can continue from what you saw before.",
      altBase: "GrepFiles screenshot"
    }),
    shots: [
      { title: "Save frequent tasks", text: "Search presets remember the query, mode, folder scope, extensions, and exclusions so recurring checks do not start from scratch.", alt: "GrepFiles save preset view" },
      { title: "Keep large result sets organized", text: "Results are grouped by file, expandable or collapsible, with source folders and match counts visible at a glance.", alt: "GrepFiles collapsed results view" },
      { title: "Built-in help lowers the learning curve", text: "Search, replacement, export, exclusions, privacy, and safety are documented so new users can start correctly.", alt: "GrepFiles help view" }
    ],
    privacy: { kicker: "Privacy and safety", title: "Your files are processed only on your Mac.", text: "GrepFiles search and help do not need a network connection, and queries, paths, or file content are not sent to a server. Folder access uses macOS sandbox authorization, and removing a folder never deletes disk files.", safetyAria: "Safety mechanisms" },
    safetyItems: [
      { title: "Preview before replacing", text: "Batch replacement first shows before/after content and lets you select by file or individual match." },
      { title: "Validate before writing", text: "GrepFiles checks file size, modification time, content fingerprints, and original matched text to avoid overwriting outside edits." },
      { title: "Session undo snapshot", text: "The latest successful replacement keeps an in-memory undo snapshot for more confidence during batch edits." }
    ],
    audience: { kicker: "Who should buy it", title: "When search is part of daily work, GrepFiles pays back quickly.", text: "It is not a one-time demo tool; it is a productivity app that reduces context switching every day." },
    audienceItems: [
      { title: "Developers", text: "Find APIs, config keys, error copy, and legacy logic in codebases, then jump directly to the file." },
      { title: "Technical writers", text: "Check terminology, headings, links, and version numbers in bulk, then export reports for review." },
      { title: "QA and support teams", text: "Search logs, test data, and documentation quickly, and organize evidence by path and line number." },
      { title: "Content maintainers", text: "Find and replace text across project folders, confirming the impact before writing changes." }
    ],
    purchase: { kicker: "Why buy", title: "Turn file-content search into a stable, reliable workflow.", text: "If you often search across code, logs, configs, and documents, GrepFiles turns scattered commands, temporary scripts, and copy-paste into one clear Mac app.", panelTitle: "What you get", bullets: ["Local file-content search and multi-folder management", "Plain text, regex, whole word, inverted match, and line-boundary controls", "Selectable batch replacement previews with session undo", "Search presets, history snapshots, copy, and multi-format export", "Local privacy and authorization designed for the macOS sandbox"] },
    faq: { kicker: "FAQ", title: "Things you may want to confirm before buying." },
    faqItems: [
      { question: "Will GrepFiles upload my files?", answer: "No. Search runs locally, and queries, paths, and file content are not sent to a server." },
      { question: "Can it do batch replacement?", answer: "Yes. Search first, prepare a replacement preview, select files or matches, and confirm before anything is written." },
      { question: "Can I export search results?", answer: "Yes. Export Markdown, CSV, JSON, or plain text, or copy matched text, whole lines, or file paths with line numbers." },
      { question: "Can I search only certain file types?", answer: "Yes. Add included extensions such as `.swift`, `.md`, or `.docx`. An empty list searches all readable text files not skipped by rules." }
    ],
    footer: { text: "Local file-content search and safe replacement for macOS.", top: "Back to top" }
  }),
  es: buildLocale({
    meta: { title: "GrepFiles - Búsqueda local y reemplazo seguro para macOS", description: "GrepFiles es una herramienta local para buscar contenido en archivos en macOS, con texto simple, regex, vista previa de reemplazos, exportación, presets e historial." },
    header: { aria: "Navegación del sitio" }, brand: { aria: "Inicio de GrepFiles" }, nav: { aria: "Navegación principal", features: "Funciones", screenshots: "Capturas", privacy: "Privacidad", purchase: "Comprar" }, language: { label: "Idioma", aria: "Elegir idioma" }, cta: { buy: "Ver opciones de compra" }, mailSubject: "Consulta de compra de GrepFiles",
    hero: { eyebrow: "Búsqueda local para macOS", lead: "Convierte la potencia de grep en una app limpia para Mac. Busca en código, logs, configuraciones, notas y documentos, localiza contenido con precisión, previsualiza reemplazos con seguridad y mantiene todo en tu Mac.", actionsAria: "Acciones principales", primaryAction: "Consultar compra", secondaryAction: "Ver capturas", factsAria: "Puntos clave", fact1Label: "Modos de búsqueda", fact1Value: "Texto simple / Regex", fact2Label: "Formatos de exportación", fact2Value: "Markdown / CSV / JSON / TXT", fact3Label: "Privacidad", fact3Value: "Procesamiento local, sin subidas" },
    intro: { kicker: "Creado para búsquedas frecuentes", title: "Menos prueba y error en terminal. Más control sobre los resultados.", text: "GrepFiles es ideal para desarrolladores, redactores técnicos, QA, equipos de contenido y cualquier persona que necesite encontrar texto rápido en muchos archivos. Conserva la precisión de grep y añade interfaz gráfica, historial, informes exportables y reemplazos por lotes confirmables." },
    workflow: { kicker: "Flujo diario", title: "De carpetas importadas a resultados listos en un solo flujo.", text: "No hace falta memorizar parámetros ni revisar salidas largas de terminal. GrepFiles convierte búsqueda, filtros, copia, exportación y reemplazo en un flujo visible, reutilizable y confirmable.", stepsAria: "Pasos del flujo" },
    steps: [{ title: "Importar carpetas", text: "Elige una o varias carpetas locales. GrepFiles guarda marcadores seguros de macOS para mantener el acceso tras reiniciar." }, { title: "Escribir una consulta", text: "Usa texto simple para cadenas fijas o cambia a expresiones regulares para reglas más complejas." }, { title: "Reducir el alcance", text: "Filtra por mayúsculas, palabras completas, coincidencia inversa, límites de línea, extensiones y directorios excluidos." }, { title: "Copiar, exportar o reemplazar", text: "Copia texto coincidente, líneas completas o ubicaciones de archivo, exporta informes o previsualiza antes de reemplazar por lotes." }],
    features: { kicker: "Funciones completas", title: "Los controles que necesita una búsqueda profesional, siempre a mano.", text: "Desde búsquedas puntuales hasta mantenimiento continuo, GrepFiles cubre escenarios comunes y reduce el coste de los errores." },
    featureItems: [{ title: "Texto simple y regex", text: "Usa texto simple para palabras clave, logs y claves de configuración; usa regex y grupos para patrones complejos." }, { title: "Tres vistas de resultados", text: "Revisa líneas coincidentes, solo el texto coincidente o rutas de archivos para lectura, conteo y listas." }, { title: "Presets de búsqueda", text: "Guarda consultas, modos, alcance de carpetas, exclusiones, extensiones y vistas como presets reutilizables." }, { title: "Instantáneas de historial", text: "Las búsquedas recientes conservan consulta, resultados, rutas y resaltados para revisarlas sin repetir." }, { title: "Reemplazo seguro por lotes", text: "Previsualiza por archivo y coincidencia, selecciona solo lo necesario y verifica cambios externos antes de escribir." }, { title: "Copia y exportación", text: "Copia texto, líneas o rutas con números de línea, y exporta Markdown, CSV, JSON o texto plano." }, { title: "Extensiones y exclusiones", text: "Busca solo extensiones elegidas y omite directorios de compilación, dependencias o personalizados." }, { title: "Búsqueda en documentos", text: "Cuando macOS puede extraer texto, los `.docx` entran en búsquedas de solo lectura." }],
    screenshots: { kicker: "Capturas reales", title: "Ves los resultados y también los riesgos.", text: "La página usa capturas existentes para mostrar búsqueda, regex, reemplazo, historial, presets y ayuda." },
    gallery: galleryText({ tabsAria: "Selector de capturas", tabs: { plain: "Búsqueda simple", regex: "Regex", replace: "Vista previa", history: "Historial" }, plainTitle: "Búsqueda simple: encuentra contexto rápido", plainText: "Importa carpetas, escribe una palabra clave y revisa líneas, números y resaltados agrupados por archivo.", regexTitle: "Regex: patrones complejos", regexText: "Usa expresiones regulares para alternativas, logs estructurados y contenido con límites específicos.", replaceTitle: "Vista previa: escribe solo tras revisar", replaceText: "Antes de reemplazar por lotes, ve cada archivo y cada cambio antes/después, y selecciona solo lo necesario.", historyTitle: "Historial: vuelve a búsquedas terminadas", historyText: "El historial guarda consultas, opciones, resúmenes de archivos e instantáneas de resultados.", altBase: "Captura de GrepFiles" }),
    shots: [{ title: "Guarda tareas frecuentes", text: "Los presets recuerdan consulta, modo, alcance, extensiones y exclusiones.", alt: "Vista de guardado de preset de GrepFiles" }, { title: "Orden incluso con muchos resultados", text: "Los resultados se agrupan por archivo y se pueden expandir o contraer.", alt: "Vista de resultados contraídos de GrepFiles" }, { title: "Ayuda integrada", text: "Búsqueda, reemplazo, exportación, exclusiones, privacidad y seguridad están documentados.", alt: "Vista de ayuda de GrepFiles" }],
    privacy: { kicker: "Privacidad y seguridad", title: "Tus archivos se procesan solo en tu Mac.", text: "GrepFiles no necesita red para buscar o mostrar ayuda, y no envía consultas, rutas ni contenido a servidores. El acceso usa el sandbox de macOS.", safetyAria: "Mecanismos de seguridad" },
    safetyItems: [{ title: "Previsualiza antes de reemplazar", text: "El reemplazo por lotes muestra el antes/después y permite seleccionar archivos o coincidencias." }, { title: "Valida antes de escribir", text: "Comprueba tamaño, modificación, huella de contenido y texto original para evitar sobrescribir cambios externos." }, { title: "Deshacer en la sesión", text: "El último reemplazo correcto conserva una instantánea en memoria para deshacer." }],
    audience: { kicker: "Para quién es", title: "Si buscar es parte de tu día, GrepFiles se amortiza rápido.", text: "No es una demo de una sola vez, sino una app que reduce cambios de contexto cada día." },
    audienceItems: [{ title: "Desarrolladores", text: "Encuentra APIs, claves, mensajes de error y lógica heredada, y salta al archivo." }, { title: "Redactores técnicos", text: "Revisa terminología, títulos, enlaces y versiones, y exporta informes." }, { title: "QA y soporte", text: "Busca logs, datos de prueba y documentación, con rutas y líneas claras." }, { title: "Mantenedores de contenido", text: "Busca y reemplaza texto en proyectos, confirmando el impacto antes de escribir." }],
    purchase: { kicker: "Por qué comprar", title: "Convierte la búsqueda de contenido en un flujo fiable.", text: "Si buscas a menudo entre código, logs, configuración y documentos, GrepFiles reemplaza comandos sueltos y scripts temporales por una app clara.", panelTitle: "Qué obtienes", bullets: ["Búsqueda local y gestión de múltiples carpetas", "Texto simple, regex, palabra completa, inversa y límites de línea", "Vista previa de reemplazo seleccionable con deshacer en sesión", "Presets, historial, copia y exportación multiformato", "Privacidad local y autorización diseñada para el sandbox de macOS"] },
    faq: { kicker: "Preguntas", title: "Lo que quizá quieras confirmar antes de comprar." },
    faqItems: [{ question: "¿GrepFiles sube mis archivos?", answer: "No. La búsqueda es local; consultas, rutas y contenido no se envían a servidores." }, { question: "¿Puede reemplazar por lotes?", answer: "Sí. Busca, prepara la vista previa, selecciona archivos o coincidencias y confirma antes de escribir." }, { question: "¿Puedo exportar resultados?", answer: "Sí. Exporta Markdown, CSV, JSON o texto plano, o copia texto, líneas o rutas con número de línea." }, { question: "¿Puedo buscar solo ciertos tipos?", answer: "Sí. Añade extensiones como `.swift`, `.md` o `.docx`. Vacío significa todos los textos legibles no omitidos." }],
    footer: { text: "Búsqueda local y reemplazo seguro para macOS.", top: "Volver arriba" }
  }),
  fr: buildLocale({
    meta: { title: "GrepFiles - Recherche locale et remplacement sûr pour macOS", description: "GrepFiles recherche localement le contenu des fichiers sur macOS avec texte simple, regex, aperçu des remplacements, export, préréglages et historique." },
    header: { aria: "Navigation du site" }, brand: { aria: "Accueil GrepFiles" }, nav: { aria: "Navigation principale", features: "Fonctions", screenshots: "Captures", privacy: "Confidentialité", purchase: "Acheter" }, language: { label: "Langue", aria: "Choisir la langue" }, cta: { buy: "Obtenir les infos d'achat" }, mailSubject: "Demande d'achat GrepFiles",
    hero: { eyebrow: "Recherche locale pour macOS", lead: "Transformez la puissance de grep en une app Mac claire. Recherchez dans le code, les journaux, les configurations, les notes et les documents, localisez précisément le contenu, prévisualisez les remplacements et gardez tout sur votre Mac.", actionsAria: "Actions principales", primaryAction: "Demander l'achat", secondaryAction: "Voir les captures", factsAria: "Points forts", fact1Label: "Modes", fact1Value: "Texte simple / Regex", fact2Label: "Exports", fact2Value: "Markdown / CSV / JSON / TXT", fact3Label: "Confidentialité", fact3Value: "Traitement local, aucun téléversement" },
    intro: { kicker: "Pour les recherches fréquentes", title: "Moins d'essais dans le terminal. Plus de contrôle.", text: "GrepFiles s'adresse aux développeurs, rédacteurs techniques, équipes QA, responsables de contenu et à tous ceux qui doivent trouver du texte vite dans beaucoup de fichiers. Il garde la précision de grep et ajoute interface graphique, historique, rapports exportables et remplacement confirmé." },
    workflow: { kicker: "Flux quotidien", title: "Des dossiers importés aux résultats exploitables, en un flux.", text: "Plus besoin de mémoriser des options complexes ni de fouiller la sortie du terminal. GrepFiles rend la recherche, les filtres, la copie, l'export et le remplacement visibles, réutilisables et confirmables.", stepsAria: "Étapes du flux" },
    steps: [{ title: "Importer des dossiers", text: "Choisissez un ou plusieurs dossiers locaux. GrepFiles enregistre des signets de sécurité macOS pour conserver l'accès." }, { title: "Saisir une requête", text: "Utilisez du texte simple pour les chaînes fixes, ou les expressions régulières pour les règles complexes." }, { title: "Réduire le périmètre", text: "Filtrez par casse, mots entiers, correspondance inverse, limites de ligne, extensions et dossiers exclus." }, { title: "Copier, exporter ou remplacer", text: "Copiez le texte, les lignes ou les emplacements, exportez des rapports, ou prévisualisez avant remplacement." }],
    features: { kicker: "Fonctions complètes", title: "Les contrôles d'une recherche professionnelle, à portée de main.", text: "De la recherche ponctuelle à la maintenance durable, GrepFiles couvre les cas courants et réduit les erreurs." },
    featureItems: [{ title: "Texte simple et regex", text: "Texte simple pour mots-clés, logs et clés de configuration ; regex et groupes pour motifs complexes." }, { title: "Trois vues de résultats", text: "Lignes correspondantes, texte correspondant seul, ou chemins de fichiers pour lire, compter et lister." }, { title: "Préréglages", text: "Enregistrez requêtes, modes, périmètre, exclusions, extensions et vues." }, { title: "Historique", text: "Les recherches récentes gardent requête, résultats, chemins et surlignages sans relance." }, { title: "Remplacement sûr", text: "Prévisualisez par fichier et occurrence, sélectionnez, puis vérifiez les changements externes avant écriture." }, { title: "Copie et export", text: "Copiez texte, lignes ou chemins avec numéros, et exportez Markdown, CSV, JSON ou texte." }, { title: "Extensions et exclusions", text: "Recherchez certaines extensions et ignorez build, dépendances ou dossiers personnalisés." }, { title: "Recherche dans documents", text: "Si macOS extrait le texte, les `.docx` peuvent être inclus en lecture seule." }],
    screenshots: { kicker: "Captures réelles", title: "Voir les résultats, et les risques.", text: "La page utilise les captures existantes de l'app pour montrer recherche, regex, remplacement, historique, préréglages et aide." },
    gallery: galleryText({ tabsAria: "Sélecteur de captures", tabs: { plain: "Recherche", regex: "Regex", replace: "Aperçu", history: "Historique" }, plainTitle: "Recherche simple : trouver le contexte vite", plainText: "Importez des dossiers, saisissez un mot-clé et consultez lignes, numéros et surlignages par fichier.", regexTitle: "Regex : motifs complexes", regexText: "Utilisez les expressions régulières pour alternatives, logs structurés et limites précises.", replaceTitle: "Aperçu : écrire après validation", replaceText: "Avant le remplacement par lot, voyez chaque fichier et chaque avant/après, puis sélectionnez le nécessaire.", historyTitle: "Historique : revenir aux recherches terminées", historyText: "L'historique conserve requêtes, options, résumés de fichiers et instantanés.", altBase: "Capture GrepFiles" }),
    shots: [{ title: "Sauver les tâches fréquentes", text: "Les préréglages mémorisent requête, mode, périmètre, extensions et exclusions.", alt: "Vue d'enregistrement de préréglage GrepFiles" }, { title: "Rester organisé", text: "Les résultats sont groupés par fichier et peuvent être dépliés ou repliés.", alt: "Vue de résultats repliés GrepFiles" }, { title: "Aide intégrée", text: "Recherche, remplacement, export, exclusions, confidentialité et sécurité sont documentés.", alt: "Vue d'aide GrepFiles" }],
    privacy: { kicker: "Confidentialité et sécurité", title: "Vos fichiers sont traités uniquement sur votre Mac.", text: "GrepFiles n'a pas besoin de réseau pour rechercher ou afficher l'aide, et n'envoie pas requêtes, chemins ou contenu à un serveur. L'accès utilise le sandbox macOS.", safetyAria: "Mécanismes de sécurité" },
    safetyItems: [{ title: "Aperçu obligatoire", text: "Le remplacement par lot montre l'avant/après et permet de choisir fichiers ou occurrences." }, { title: "Validation avant écriture", text: "Taille, date, empreinte et texte original sont vérifiés pour éviter d'écraser des changements externes." }, { title: "Annulation de session", text: "Le dernier remplacement réussi garde un instantané en mémoire pour annuler." }],
    audience: { kicker: "Pour qui", title: "Si la recherche fait partie du quotidien, GrepFiles se rentabilise vite.", text: "Ce n'est pas une démo ponctuelle, mais une app qui réduit les changements de contexte chaque jour." },
    audienceItems: [{ title: "Développeurs", text: "Trouvez API, clés, messages d'erreur et logique héritée, puis ouvrez le fichier." }, { title: "Rédacteurs techniques", text: "Contrôlez termes, titres, liens et versions, puis exportez les rapports." }, { title: "QA et support", text: "Recherchez logs, données de test et documentation avec chemins et lignes." }, { title: "Responsables contenu", text: "Cherchez et remplacez dans plusieurs projets après confirmation de l'impact." }],
    purchase: { kicker: "Pourquoi acheter", title: "Transformer la recherche de contenu en flux fiable.", text: "Si vous cherchez souvent dans code, logs, configurations et documents, GrepFiles remplace commandes éparses et scripts temporaires par une app claire.", panelTitle: "Ce que vous obtenez", bullets: ["Recherche locale et gestion multi-dossiers", "Texte simple, regex, mot entier, inverse et limites de ligne", "Aperçu de remplacement sélectionnable avec annulation", "Préréglages, historique, copie et export multiformat", "Confidentialité locale et autorisation conçues pour le sandbox macOS"] },
    faq: { kicker: "FAQ", title: "À confirmer avant l'achat." },
    faqItems: [{ question: "GrepFiles téléverse-t-il mes fichiers ?", answer: "Non. La recherche est locale ; requêtes, chemins et contenu ne sont pas envoyés." }, { question: "Peut-il remplacer par lot ?", answer: "Oui. Recherchez, préparez l'aperçu, sélectionnez et confirmez avant écriture." }, { question: "Puis-je exporter les résultats ?", answer: "Oui. Markdown, CSV, JSON ou texte, ou copie du texte, lignes ou chemins avec numéros." }, { question: "Puis-je limiter les types de fichiers ?", answer: "Oui. Ajoutez `.swift`, `.md` ou `.docx`. Vide signifie tous les textes lisibles non exclus." }],
    footer: { text: "Recherche locale et remplacement sûr pour macOS.", top: "Retour en haut" }
  }),
  de: buildLocale({
    meta: { title: "GrepFiles - Lokale Dateisuche und sichere Ersetzung für macOS", description: "GrepFiles durchsucht Dateiinhalte lokal auf macOS und bietet Klartextsuche, Regex, Ersetzungsvorschau, Export, Presets und Verlauf." },
    header: { aria: "Seitennavigation" }, brand: { aria: "GrepFiles Startseite" }, nav: { aria: "Hauptnavigation", features: "Funktionen", screenshots: "Screenshots", privacy: "Datenschutz", purchase: "Kaufen" }, language: { label: "Sprache", aria: "Sprache auswählen" }, cta: { buy: "Kaufinfos erhalten" }, mailSubject: "GrepFiles Kaufanfrage",
    hero: { eyebrow: "Lokale Suche für macOS", lead: "Machen Sie die Kraft von grep zu einer klaren Mac-App. Durchsuchen Sie Code, Logs, Konfigurationen, Notizen und Dokumente, finden Sie Inhalte präzise, prüfen Sie Ersetzungen sicher vorab und behalten Sie alles auf Ihrem Mac.", actionsAria: "Hauptaktionen", primaryAction: "Kauf anfragen", secondaryAction: "Screenshots ansehen", factsAria: "Produkt-Highlights", fact1Label: "Suchmodi", fact1Value: "Klartext / Regex", fact2Label: "Exportformate", fact2Value: "Markdown / CSV / JSON / TXT", fact3Label: "Datenschutz", fact3Value: "Lokal verarbeitet, keine Uploads" },
    intro: { kicker: "Für häufige Dateisuche gebaut", title: "Weniger Terminal-Raten. Mehr Kontrolle über Ergebnisse.", text: "GrepFiles ist für Entwickler, technische Autoren, QA-Teams, Content-Pfleger und alle gedacht, die schnell Text in vielen Dateien finden müssen. Es behält die Präzision von grep und ergänzt Oberfläche, Verlauf, Exportberichte und bestätigbare Stapelersetzung." },
    workflow: { kicker: "Täglicher Ablauf", title: "Von importierten Ordnern zu nutzbaren Ergebnissen in einem Ablauf.", text: "Sie müssen keine komplexen Flags merken und keine Terminalausgaben durchsuchen. GrepFiles macht Suche, Filter, Kopieren, Export und Ersetzung sichtbar, wiederverwendbar und bestätigbar.", stepsAria: "Ablaufschritte" },
    steps: [{ title: "Ordner importieren", text: "Wählen Sie einen oder mehrere lokale Ordner. GrepFiles speichert macOS-Sicherheitslesezeichen, damit der Zugriff erhalten bleibt." }, { title: "Abfrage eingeben", text: "Nutzen Sie Klartext für feste Zeichenfolgen oder Regex für komplexere Regeln." }, { title: "Bereich eingrenzen", text: "Filtern Sie nach Groß-/Kleinschreibung, ganzen Wörtern, invertierter Suche, Zeilengrenzen, Erweiterungen und ausgeschlossenen Ordnern." }, { title: "Kopieren, exportieren oder ersetzen", text: "Kopieren Sie Treffer, ganze Zeilen oder Dateipositionen, exportieren Sie Berichte oder prüfen Sie Ersetzungen vorab." }],
    features: { kicker: "Vollständige Funktionen", title: "Alle Kontrollen für professionelle Suche griffbereit.", text: "Von einmaligen Suchen bis zur langfristigen Pflege deckt GrepFiles typische Szenarien ab und reduziert Fehlerkosten." },
    featureItems: [{ title: "Klartext und Regex", text: "Klartext für Schlüsselwörter, Logfragmente und Konfigurationsschlüssel; Regex und Gruppen für komplexe Muster." }, { title: "Drei Ergebnisansichten", text: "Trefferzeilen, nur Treffertext oder Dateipfade für Lesen, Zählen und Listen." }, { title: "Such-Presets", text: "Speichern Sie Abfragen, Modus, Ordnerbereich, Ausschlüsse, Erweiterungen und Ansichten." }, { title: "Verlaufsschnappschüsse", text: "Letzte Suchen behalten Abfrage, Ergebnisse, Pfade und Hervorhebungen ohne erneutes Ausführen." }, { title: "Sichere Stapelersetzung", text: "Vorschau nach Datei und Treffer, Auswahl der nötigen Änderungen und Prüfung externer Änderungen vor dem Schreiben." }, { title: "Kopieren und Export", text: "Kopieren Sie Text, Zeilen oder Pfade mit Zeilennummern und exportieren Sie Markdown, CSV, JSON oder Text." }, { title: "Erweiterungen und Ausschlüsse", text: "Suchen Sie nur gewählte Erweiterungen und überspringen Sie Build-, Abhängigkeits- oder eigene Ordner." }, { title: "Dokumentsuche", text: "Wenn macOS Text extrahieren kann, lassen sich `.docx`-Dateien schreibgeschützt durchsuchen." }],
    screenshots: { kicker: "Echte App-Screenshots", title: "Ergebnisse und Risiken sichtbar.", text: "Diese Seite nutzt vorhandene App-Screenshots für Suche, Regex, Ersetzungsvorschau, Verlauf, Presets und Hilfe." },
    gallery: galleryText({ tabsAria: "Screenshot-Auswahl", tabs: { plain: "Klartextsuche", regex: "Regex", replace: "Vorschau", history: "Verlauf" }, plainTitle: "Klartextsuche: Kontext schnell finden", plainText: "Importieren Sie Ordner, geben Sie ein Schlüsselwort ein und sehen Sie Trefferzeilen, Nummern und Hervorhebungen nach Datei gruppiert.", regexTitle: "Regex: komplexe Muster", regexText: "Nutzen Sie reguläre Ausdrücke für Alternativen, strukturierte Logs und Inhalte an bestimmten Grenzen.", replaceTitle: "Vorschau: erst prüfen, dann schreiben", replaceText: "Vor der Stapelersetzung sehen Sie jede Datei und jede Änderung im Vorher/Nachher-Vergleich.", historyTitle: "Verlauf: abgeschlossene Suchen erneut ansehen", historyText: "Der Verlauf speichert Abfragen, Optionen, Dateizusammenfassungen und Ergebnis-Schnappschüsse.", altBase: "GrepFiles Screenshot" }),
    shots: [{ title: "Häufige Aufgaben speichern", text: "Presets merken Abfrage, Modus, Bereich, Erweiterungen und Ausschlüsse.", alt: "GrepFiles Ansicht zum Speichern eines Presets" }, { title: "Ordnung bei vielen Treffern", text: "Ergebnisse sind nach Dateien gruppiert und lassen sich aus- oder einklappen.", alt: "GrepFiles eingeklappte Ergebnisansicht" }, { title: "Integrierte Hilfe", text: "Suche, Ersetzung, Export, Ausschlüsse, Datenschutz und Sicherheit sind dokumentiert.", alt: "GrepFiles Hilfeansicht" }],
    privacy: { kicker: "Datenschutz und Sicherheit", title: "Ihre Dateien werden nur auf Ihrem Mac verarbeitet.", text: "GrepFiles benötigt für Suche und Hilfe keine Netzwerkverbindung und sendet keine Abfragen, Pfade oder Inhalte an Server. Der Zugriff nutzt die macOS-Sandbox.", safetyAria: "Sicherheitsmechanismen" },
    safetyItems: [{ title: "Vorschau vor Ersetzung", text: "Die Stapelersetzung zeigt Vorher/Nachher und erlaubt Auswahl nach Datei oder Treffer." }, { title: "Prüfung vor dem Schreiben", text: "Dateigröße, Änderungszeit, Inhaltsfingerabdruck und Originaltreffer werden geprüft." }, { title: "Rückgängig in der Sitzung", text: "Die letzte erfolgreiche Ersetzung behält einen Speicher-Schnappschuss zum Rückgängigmachen." }],
    audience: { kicker: "Für wen", title: "Wenn Suche zum Alltag gehört, macht sich GrepFiles schnell bezahlt.", text: "Es ist kein einmaliges Demo-Tool, sondern eine Produktivitäts-App, die täglich Kontextwechsel reduziert." },
    audienceItems: [{ title: "Entwickler", text: "Finden Sie APIs, Konfigurationsschlüssel, Fehlermeldungen und Legacy-Logik und öffnen Sie direkt die Datei." }, { title: "Technische Autoren", text: "Prüfen Sie Begriffe, Überschriften, Links und Versionen und exportieren Sie Berichte." }, { title: "QA und Support", text: "Durchsuchen Sie Logs, Testdaten und Dokumentation mit klaren Pfaden und Zeilen." }, { title: "Content-Pfleger", text: "Suchen und ersetzen Sie Text über Projekte hinweg, nachdem der Umfang klar ist." }],
    purchase: { kicker: "Warum kaufen", title: "Machen Sie Dateiinhaltsuche zu einem zuverlässigen Ablauf.", text: "Wenn Sie häufig in Code, Logs, Konfigurationen und Dokumenten suchen, ersetzt GrepFiles lose Befehle und temporäre Skripte durch eine klare Mac-App.", panelTitle: "Das bekommen Sie", bullets: ["Lokale Dateiinhaltsuche und Verwaltung mehrerer Ordner", "Klartext, Regex, ganzes Wort, invertierte Suche und Zeilengrenzen", "Auswählbare Ersetzungsvorschau mit Rückgängig in der Sitzung", "Such-Presets, Verlauf, Kopieren und Export in mehreren Formaten", "Lokaler Datenschutz und Autorisierung für die macOS-Sandbox"] },
    faq: { kicker: "FAQ", title: "Was Sie vor dem Kauf prüfen möchten." },
    faqItems: [{ question: "Lädt GrepFiles meine Dateien hoch?", answer: "Nein. Die Suche läuft lokal; Abfragen, Pfade und Inhalte werden nicht gesendet." }, { question: "Kann es stapelweise ersetzen?", answer: "Ja. Erst suchen, Vorschau erstellen, Dateien oder Treffer wählen und vor dem Schreiben bestätigen." }, { question: "Kann ich Ergebnisse exportieren?", answer: "Ja. Markdown, CSV, JSON oder Text sowie Kopieren von Treffern, Zeilen oder Pfaden mit Zeilennummer." }, { question: "Kann ich Dateitypen einschränken?", answer: "Ja. Fügen Sie Erweiterungen wie `.swift`, `.md` oder `.docx` hinzu. Leer bedeutet alle lesbaren Textdateien, die nicht ausgeschlossen sind." }],
    footer: { text: "Lokale Dateisuche und sichere Ersetzung für macOS.", top: "Nach oben" }
  }),
  it: buildLocale({
    meta: { title: "GrepFiles - Ricerca locale e sostituzione sicura per macOS", description: "GrepFiles cerca contenuti nei file localmente su macOS con testo semplice, regex, anteprima sostituzioni, esportazione, preset e cronologia." },
    header: { aria: "Navigazione del sito" }, brand: { aria: "Home GrepFiles" }, nav: { aria: "Navigazione principale", features: "Funzioni", screenshots: "Schermate", privacy: "Privacy", purchase: "Acquista" }, language: { label: "Lingua", aria: "Scegli lingua" }, cta: { buy: "Ricevi info d'acquisto" }, mailSubject: "Richiesta acquisto GrepFiles",
    hero: { eyebrow: "Ricerca locale per macOS", lead: "Trasforma la potenza di grep in un'app Mac pulita. Cerca in codice, log, configurazioni, note e documenti, trova contenuti con precisione, controlla le sostituzioni in anteprima e mantieni tutto sul tuo Mac.", actionsAria: "Azioni principali", primaryAction: "Chiedi l'acquisto", secondaryAction: "Vedi schermate", factsAria: "Punti forti", fact1Label: "Modalità", fact1Value: "Testo semplice / Regex", fact2Label: "Export", fact2Value: "Markdown / CSV / JSON / TXT", fact3Label: "Privacy", fact3Value: "Elaborazione locale, nessun upload" },
    intro: { kicker: "Pensato per ricerche frequenti", title: "Meno tentativi nel terminale. Più controllo sui risultati.", text: "GrepFiles è per sviluppatori, technical writer, QA, team contenuti e chiunque debba trovare testo rapidamente in molti file. Mantiene la precisione di grep e aggiunge interfaccia grafica, cronologia, report esportabili e sostituzioni batch confermabili." },
    workflow: { kicker: "Flusso quotidiano", title: "Dalle cartelle importate ai risultati pronti, in un solo flusso.", text: "Non serve ricordare flag complessi né cercare nell'output del terminale. GrepFiles rende ricerca, filtri, copia, esportazione e sostituzione visibili, riutilizzabili e confermabili.", stepsAria: "Passi del flusso" },
    steps: [{ title: "Importa cartelle", text: "Scegli una o più cartelle locali. GrepFiles salva segnalibri sicuri macOS per mantenere l'accesso." }, { title: "Inserisci query", text: "Usa testo semplice per stringhe fisse o regex per regole più complesse." }, { title: "Restringi l'ambito", text: "Filtra per maiuscole, parole intere, inverso, limiti di riga, estensioni e directory escluse." }, { title: "Copia, esporta o sostituisci", text: "Copia testo, righe o posizioni, esporta report o controlla in anteprima prima della sostituzione batch." }],
    features: { kicker: "Funzioni complete", title: "I controlli per una ricerca professionale, sempre a portata.", text: "Dalle ricerche una tantum alla manutenzione continua, GrepFiles copre gli scenari comuni e riduce gli errori." },
    featureItems: [{ title: "Testo semplice e regex", text: "Testo semplice per parole chiave, log e chiavi di configurazione; regex e gruppi per pattern complessi." }, { title: "Tre viste risultati", text: "Righe con corrispondenze, solo testo trovato o percorsi file per lettura, conteggio e liste." }, { title: "Preset di ricerca", text: "Salva query, modalità, ambito cartelle, esclusioni, estensioni e viste." }, { title: "Cronologia", text: "Le ricerche recenti conservano query, risultati, percorsi ed evidenziazioni." }, { title: "Sostituzione batch sicura", text: "Anteprima per file e corrispondenza, selezione mirata e verifica delle modifiche esterne prima di scrivere." }, { title: "Copia ed esportazione", text: "Copia testo, righe o percorsi con numero di riga ed esporta Markdown, CSV, JSON o testo." }, { title: "Estensioni ed esclusioni", text: "Cerca solo estensioni scelte e salta build, dipendenze o directory personalizzate." }, { title: "Ricerca nei documenti", text: "Se macOS estrae il testo, i file `.docx` possono essere cercati in sola lettura." }],
    screenshots: { kicker: "Schermate reali", title: "Vedi i risultati e anche i rischi.", text: "La pagina usa schermate esistenti dell'app per mostrare ricerca, regex, anteprima, cronologia, preset e aiuto." },
    gallery: galleryText({ tabsAria: "Selettore schermate", tabs: { plain: "Ricerca", regex: "Regex", replace: "Anteprima", history: "Cronologia" }, plainTitle: "Ricerca semplice: trova subito il contesto", plainText: "Importa cartelle, inserisci una parola chiave e vedi righe, numeri ed evidenziazioni raggruppate per file.", regexTitle: "Regex: pattern complessi", regexText: "Usa espressioni regolari per alternative, log strutturati e contenuti con limiti specifici.", replaceTitle: "Anteprima: scrivi solo dopo il controllo", replaceText: "Prima della sostituzione batch vedi ogni file e ogni prima/dopo, poi scegli solo ciò che serve.", historyTitle: "Cronologia: torna alle ricerche completate", historyText: "La cronologia salva query, opzioni, riepiloghi file e istantanee dei risultati.", altBase: "Schermata GrepFiles" }),
    shots: [{ title: "Salva attività frequenti", text: "I preset ricordano query, modalità, ambito, estensioni ed esclusioni.", alt: "Vista salvataggio preset GrepFiles" }, { title: "Ordine con molti risultati", text: "I risultati sono raggruppati per file e possono essere espansi o compressi.", alt: "Vista risultati compressi GrepFiles" }, { title: "Aiuto integrato", text: "Ricerca, sostituzione, esportazione, esclusioni, privacy e sicurezza sono documentate.", alt: "Vista aiuto GrepFiles" }],
    privacy: { kicker: "Privacy e sicurezza", title: "I tuoi file vengono elaborati solo sul tuo Mac.", text: "GrepFiles non richiede rete per ricerca o aiuto e non invia query, percorsi o contenuti a server. L'accesso usa il sandbox macOS.", safetyAria: "Meccanismi di sicurezza" },
    safetyItems: [{ title: "Anteprima prima di sostituire", text: "La sostituzione batch mostra il prima/dopo e consente di scegliere file o corrispondenze." }, { title: "Verifica prima di scrivere", text: "Dimensione, modifica, impronta del contenuto e testo originale vengono controllati." }, { title: "Annullamento nella sessione", text: "L'ultima sostituzione riuscita mantiene un'istantanea in memoria per annullare." }],
    audience: { kicker: "Per chi", title: "Se la ricerca è parte del lavoro quotidiano, GrepFiles si ripaga in fretta.", text: "Non è una demo una tantum, ma un'app di produttività che riduce i cambi di contesto." },
    audienceItems: [{ title: "Sviluppatori", text: "Trova API, chiavi, messaggi di errore e logica legacy, poi apri direttamente il file." }, { title: "Technical writer", text: "Controlla termini, titoli, link e versioni, poi esporta report." }, { title: "QA e supporto", text: "Cerca log, dati di test e documentazione con percorsi e righe chiare." }, { title: "Gestori contenuti", text: "Cerca e sostituisci testo in più progetti dopo aver confermato l'impatto." }],
    purchase: { kicker: "Perché acquistare", title: "Trasforma la ricerca nei file in un flusso affidabile.", text: "Se cerchi spesso tra codice, log, configurazioni e documenti, GrepFiles sostituisce comandi sparsi e script temporanei con un'app Mac chiara.", panelTitle: "Cosa ottieni", bullets: ["Ricerca locale e gestione multi-cartella", "Testo semplice, regex, parola intera, inverso e limiti di riga", "Anteprima sostituzione selezionabile con annulla nella sessione", "Preset, cronologia, copia ed export multiformato", "Privacy locale e autorizzazione per il sandbox macOS"] },
    faq: { kicker: "FAQ", title: "Cose da confermare prima dell'acquisto." },
    faqItems: [{ question: "GrepFiles carica i miei file?", answer: "No. La ricerca è locale; query, percorsi e contenuti non vengono inviati." }, { question: "Può sostituire in batch?", answer: "Sì. Cerca, prepara l'anteprima, seleziona file o corrispondenze e conferma." }, { question: "Posso esportare i risultati?", answer: "Sì. Markdown, CSV, JSON o testo, oppure copia testo, righe o percorsi con numero di riga." }, { question: "Posso limitare i tipi di file?", answer: "Sì. Aggiungi estensioni come `.swift`, `.md` o `.docx`. Vuoto significa tutti i testi leggibili non esclusi." }],
    footer: { text: "Ricerca locale e sostituzione sicura per macOS.", top: "Torna su" }
  }),
  ja: buildLocale({
    meta: { title: "GrepFiles - macOS向けローカルファイル検索と安全な置換", description: "GrepFiles は macOS 上でファイル内容をローカル検索するツールです。通常検索、正規表現、置換プレビュー、エクスポート、プリセット、履歴に対応します。" },
    header: { aria: "サイトナビゲーション" }, brand: { aria: "GrepFiles ホーム" }, nav: { aria: "メインナビゲーション", features: "機能", screenshots: "画面", privacy: "プライバシー", purchase: "購入" }, language: { label: "言語", aria: "言語を選択" }, cta: { buy: "購入方法を見る" }, mailSubject: "GrepFiles 購入相談",
    hero: { eyebrow: "macOS ローカル検索ツール", lead: "grep の力を、すっきりした Mac アプリに。ソースコード、ログ、設定、ノート、文書を検索し、内容を正確に見つけ、安全に置換をプレビューし、すべての処理を Mac 内に保ちます。", actionsAria: "主な操作", primaryAction: "購入相談をする", secondaryAction: "画面を見る", factsAria: "製品の特長", fact1Label: "検索モード", fact1Value: "通常テキスト / 正規表現", fact2Label: "書き出し形式", fact2Value: "Markdown / CSV / JSON / TXT", fact3Label: "プライバシー", fact3Value: "ローカル処理、アップロードなし" },
    intro: { kicker: "高頻度のファイル検索のために", title: "ターミナルでの試行錯誤を減らし、結果をもっと制御。", text: "GrepFiles は開発者、テクニカルライター、QA、コンテンツ担当者、大量のテキストファイルから素早く探したい人に向けたツールです。grep の精度を保ちつつ、GUI、履歴、エクスポート可能なレポート、確認できる一括置換を加えます。" },
    workflow: { kicker: "日常のワークフロー", title: "フォルダの読み込みから結果の活用まで、一つの流れで完了。", text: "複雑なオプションを覚えたり、ターミナル出力を探し回る必要はありません。検索、絞り込み、コピー、エクスポート、置換を、見える形で再利用でき、確認できる流れにします。", stepsAria: "ワークフローの手順" },
    steps: [{ title: "フォルダを読み込む", text: "一つ以上のローカルフォルダを選択します。macOS のセキュリティブックマークで次回もアクセスできます。" }, { title: "クエリを入力", text: "固定文字列は通常テキストで、複雑な条件は正規表現で検索できます。" }, { title: "範囲を絞る", text: "大文字小文字、単語全体、反転一致、行頭行末、拡張子、除外フォルダで絞り込みます。" }, { title: "コピー、書き出し、置換", text: "一致テキスト、行、場所をコピーし、レポートを書き出し、置換はプレビュー後に実行します。" }],
    features: { kicker: "充実した機能", title: "プロ向け検索に必要な操作をすぐ手元に。", text: "一度きりの検索から継続的な保守まで、GrepFiles はよくある場面をカバーし、ミスのコストを下げます。" },
    featureItems: [{ title: "通常テキストと正規表現", text: "キーワード、ログ片、設定キーは通常テキストで。複雑なパターンは正規表現とキャプチャグループで。" }, { title: "3つの結果表示", text: "一致行、一致テキストのみ、ファイルパスのみを切り替え、読む・数える・一覧化に対応します。" }, { title: "検索プリセット", text: "クエリ、モード、フォルダ範囲、除外、拡張子、結果表示を再利用できます。" }, { title: "検索履歴スナップショット", text: "最近の検索はクエリ、結果、パス、ハイライトを保存し、再検索なしで見返せます。" }, { title: "安全な一括置換", text: "ファイルと一致ごとにプレビューし、必要な項目だけ選択。書き込み前に外部変更を確認します。" }, { title: "コピーとレポート書き出し", text: "一致テキスト、行、行番号付きパスをコピーし、Markdown、CSV、JSON、テキストへ書き出せます。" }, { title: "拡張子と除外ルール", text: "指定拡張子だけを検索し、ビルド、依存関係、カスタムフォルダを除外できます。" }, { title: "文書本文の検索", text: "macOS が本文を抽出できる場合、`.docx` も読み取り専用検索に含められます。" }],
    screenshots: { kicker: "実際の画面", title: "結果もリスクも見える。", text: "既存のアプリ画面を使い、検索、正規表現、置換プレビュー、履歴、プリセット、ヘルプを紹介します。" },
    gallery: galleryText({ tabsAria: "画面切り替え", tabs: { plain: "通常検索", regex: "正規表現", replace: "置換プレビュー", history: "履歴" }, plainTitle: "通常検索：文脈をすばやく見つける", plainText: "複数フォルダを読み込み、キーワードを入力すると、一致行、行番号、ハイライトをファイルごとに確認できます。", regexTitle: "正規表現：複雑な条件に対応", regexText: "候補語、構造化ログ、境界条件の検索に正規表現を使えます。", replaceTitle: "置換プレビュー：確認してから書き込む", replaceText: "一括置換の前に、各ファイルと各一致の変更前後を確認し、必要なものだけ選べます。", historyTitle: "履歴：完了した検索を見返す", historyText: "履歴はクエリ、オプション、ファイル概要、結果スナップショットを保存します。", altBase: "GrepFiles 画面" }),
    shots: [{ title: "よく使う作業を保存", text: "プリセットはクエリ、モード、範囲、拡張子、除外を記憶します。", alt: "GrepFiles プリセット保存画面" }, { title: "大量の結果も整理", text: "結果はファイルごとにグループ化され、展開・折りたたみできます。", alt: "GrepFiles 折りたたみ結果画面" }, { title: "内蔵ヘルプ", text: "検索、置換、書き出し、除外、プライバシー、安全性を確認できます。", alt: "GrepFiles ヘルプ画面" }],
    privacy: { kicker: "プライバシーと安全性", title: "あなたのファイルは、あなたの Mac 上だけで処理されます。", text: "GrepFiles の検索とヘルプはネットワーク接続を必要とせず、クエリ、パス、ファイル内容をサーバーへ送信しません。フォルダアクセスは macOS サンドボックスの許可を使います。", safetyAria: "安全機構" },
    safetyItems: [{ title: "置換前に必ずプレビュー", text: "一括置換は変更前後を表示し、ファイルまたは一致単位で選択できます。" }, { title: "書き込み前に検証", text: "サイズ、更新時刻、内容指紋、元の一致テキストを確認し、外部変更の上書きを防ぎます。" }, { title: "セッション内の取り消し", text: "最後に成功した置換はメモリ内スナップショットで取り消しできます。" }],
    audience: { kicker: "購入に向く人", title: "検索が日常業務なら、GrepFiles はすぐに元が取れます。", text: "一回限りのデモではなく、毎日のコンテキスト切り替えを減らす生産性アプリです。" },
    audienceItems: [{ title: "開発者", text: "API、設定キー、エラーメッセージ、古いロジックを探し、直接ファイルへ移動できます。" }, { title: "テクニカルライター", text: "用語、見出し、リンク、バージョンを一括確認し、レポートを書き出せます。" }, { title: "QA とサポート", text: "ログ、テストデータ、ドキュメントを検索し、パスと行番号で証拠を整理できます。" }, { title: "コンテンツ担当者", text: "複数プロジェクトで検索と置換を行い、影響範囲を確認してから書き込みます。" }],
    purchase: { kicker: "購入理由", title: "ファイル内容検索を、安定したワークフローに。", text: "コード、ログ、設定、文書をよく検索するなら、GrepFiles は散らばったコマンドや一時スクリプトを一つの明確な Mac アプリにまとめます。", panelTitle: "得られるもの", bullets: ["ローカルファイル内容検索と複数フォルダ管理", "通常テキスト、正規表現、単語全体、反転一致、行境界", "選択可能な一括置換プレビューとセッション内取り消し", "検索プリセット、履歴、コピー、多形式エクスポート", "macOS サンドボックス向けのローカルプライバシーと許可"] },
    faq: { kicker: "FAQ", title: "購入前に確認したいこと。" },
    faqItems: [{ question: "GrepFiles はファイルをアップロードしますか？", answer: "いいえ。検索はローカルで実行され、クエリ、パス、内容は送信されません。" }, { question: "一括置換できますか？", answer: "できます。検索後に置換プレビューを作成し、ファイルや一致を選択してから確認します。" }, { question: "検索結果を書き出せますか？", answer: "Markdown、CSV、JSON、テキストで書き出し、テキスト、行、行番号付きパスもコピーできます。" }, { question: "特定の種類だけ検索できますか？", answer: "`.swift`、`.md`、`.docx` などの拡張子を指定できます。空の場合は除外されない可読テキストを検索します。" }],
    footer: { text: "macOS向けローカルファイル検索と安全な置換。", top: "トップへ戻る" }
  }),
  ru: buildLocale({
    meta: { title: "GrepFiles - Локальный поиск по файлам и безопасная замена для macOS", description: "GrepFiles локально ищет содержимое файлов в macOS: обычный текст, регулярные выражения, предпросмотр замен, экспорт, пресеты и история." },
    header: { aria: "Навигация сайта" }, brand: { aria: "Главная GrepFiles" }, nav: { aria: "Основная навигация", features: "Функции", screenshots: "Скриншоты", privacy: "Приватность", purchase: "Купить" }, language: { label: "Язык", aria: "Выбрать язык" }, cta: { buy: "Узнать о покупке" }, mailSubject: "Запрос на покупку GrepFiles",
    hero: { eyebrow: "Локальный поиск для macOS", lead: "Превратите силу grep в аккуратное Mac-приложение. Ищите в коде, логах, конфигурациях, заметках и документах, точно находите содержимое, безопасно просматривайте замены и храните всё на своём Mac.", actionsAria: "Основные действия", primaryAction: "Запросить покупку", secondaryAction: "Смотреть скриншоты", factsAria: "Преимущества", fact1Label: "Режимы поиска", fact1Value: "Текст / Regex", fact2Label: "Экспорт", fact2Value: "Markdown / CSV / JSON / TXT", fact3Label: "Приватность", fact3Value: "Локальная обработка, без загрузок" },
    intro: { kicker: "Для частого поиска по файлам", title: "Меньше проб в терминале. Больше контроля над результатами.", text: "GrepFiles подходит разработчикам, техническим авторам, QA, контент-командам и всем, кому нужно быстро находить текст в большом количестве файлов. Он сохраняет точность grep и добавляет интерфейс, историю, экспортируемые отчёты и подтверждаемую массовую замену." },
    workflow: { kicker: "Ежедневный процесс", title: "От импортированных папок до готовых результатов в одном потоке.", text: "Не нужно помнить сложные параметры или просматривать вывод терминала. GrepFiles делает поиск, фильтры, копирование, экспорт и замену видимыми, повторяемыми и подтверждаемыми.", stepsAria: "Шаги процесса" },
    steps: [{ title: "Импорт папок", text: "Выберите одну или несколько локальных папок. GrepFiles сохраняет безопасные закладки macOS для доступа после перезапуска." }, { title: "Введите запрос", text: "Используйте обычный текст для фиксированных строк или регулярные выражения для сложных правил." }, { title: "Сузьте область", text: "Фильтруйте по регистру, целым словам, обратному совпадению, границам строк, расширениям и исключённым папкам." }, { title: "Копируйте, экспортируйте или заменяйте", text: "Копируйте текст, строки или позиции, экспортируйте отчёты или просматривайте замены перед записью." }],
    features: { kicker: "Полный набор функций", title: "Все элементы управления для профессионального поиска под рукой.", text: "От разового поиска до долгой поддержки проектов GrepFiles закрывает типичные сценарии и снижает риск ошибок." },
    featureItems: [{ title: "Текст и regex", text: "Обычный текст для ключевых слов, логов и настроек; regex и группы для сложных шаблонов." }, { title: "Три вида результатов", text: "Строки с совпадениями, только найденный текст или пути файлов для чтения, подсчёта и списков." }, { title: "Пресеты поиска", text: "Сохраняйте запросы, режимы, область папок, исключения, расширения и виды результатов." }, { title: "Снимки истории", text: "Недавние поиски хранят запрос, результаты, пути и подсветки без повторного запуска." }, { title: "Безопасная массовая замена", text: "Предпросмотр по файлам и совпадениям, выбор нужного и проверка внешних изменений перед записью." }, { title: "Копирование и экспорт", text: "Копируйте текст, строки или пути с номерами строк и экспортируйте Markdown, CSV, JSON или текст." }, { title: "Расширения и исключения", text: "Ищите только выбранные расширения и пропускайте build, зависимости или свои папки." }, { title: "Поиск в документах", text: "Если macOS извлекает текст, `.docx` можно включить в поиск только для чтения." }],
    screenshots: { kicker: "Реальные скриншоты", title: "Видны и результаты, и риски.", text: "Страница использует существующие скриншоты приложения: поиск, regex, предпросмотр замен, историю, пресеты и справку." },
    gallery: galleryText({ tabsAria: "Переключатель скриншотов", tabs: { plain: "Обычный поиск", regex: "Regex", replace: "Предпросмотр", history: "История" }, plainTitle: "Обычный поиск: быстро найти контекст", plainText: "Импортируйте папки, введите ключевое слово и смотрите строки, номера и подсветку, сгруппированные по файлам.", regexTitle: "Regex: сложные шаблоны", regexText: "Используйте регулярные выражения для альтернатив, структурированных логов и границ.", replaceTitle: "Предпросмотр: запись только после проверки", replaceText: "Перед массовой заменой смотрите каждый файл и каждое изменение до/после, выбирая только нужное.", historyTitle: "История: вернуться к завершённым поискам", historyText: "История сохраняет запросы, параметры, сводки файлов и снимки результатов.", altBase: "Скриншот GrepFiles" }),
    shots: [{ title: "Сохраняйте частые задачи", text: "Пресеты запоминают запрос, режим, область, расширения и исключения.", alt: "Вид сохранения пресета GrepFiles" }, { title: "Порядок при множестве результатов", text: "Результаты сгруппированы по файлам и могут раскрываться или сворачиваться.", alt: "Свёрнутый вид результатов GrepFiles" }, { title: "Встроенная справка", text: "Поиск, замена, экспорт, исключения, приватность и безопасность описаны в справке.", alt: "Вид справки GrepFiles" }],
    privacy: { kicker: "Приватность и безопасность", title: "Ваши файлы обрабатываются только на вашем Mac.", text: "GrepFiles не требует сети для поиска или справки и не отправляет запросы, пути или содержимое на сервер. Доступ использует песочницу macOS.", safetyAria: "Механизмы безопасности" },
    safetyItems: [{ title: "Предпросмотр перед заменой", text: "Массовая замена показывает до/после и позволяет выбирать файлы или отдельные совпадения." }, { title: "Проверка перед записью", text: "Проверяются размер, время изменения, отпечаток содержимого и исходный найденный текст." }, { title: "Отмена в рамках сеанса", text: "Последняя успешная замена хранит снимок в памяти для отмены." }],
    audience: { kicker: "Кому подходит", title: "Если поиск нужен каждый день, GrepFiles быстро окупается.", text: "Это не одноразовая демонстрация, а инструмент продуктивности, который снижает переключение контекста." },
    audienceItems: [{ title: "Разработчики", text: "Ищите API, ключи конфигурации, тексты ошибок и устаревшую логику, переходя прямо к файлу." }, { title: "Технические авторы", text: "Проверяйте термины, заголовки, ссылки и версии, затем экспортируйте отчёты." }, { title: "QA и поддержка", text: "Ищите логи, тестовые данные и документацию с понятными путями и строками." }, { title: "Контент-менеджеры", text: "Ищите и заменяйте текст в проектах, сначала подтверждая область влияния." }],
    purchase: { kicker: "Почему купить", title: "Сделайте поиск по содержимому файлов надёжным процессом.", text: "Если вы часто ищете в коде, логах, конфигурациях и документах, GrepFiles заменяет разрозненные команды и временные скрипты одним понятным Mac-приложением.", panelTitle: "Что вы получите", bullets: ["Локальный поиск по файлам и управление несколькими папками", "Обычный текст, regex, целые слова, обратное совпадение и границы строк", "Выбираемый предпросмотр массовой замены с отменой в сеансе", "Пресеты, история, копирование и экспорт в нескольких форматах", "Локальная приватность и авторизация для песочницы macOS"] },
    faq: { kicker: "FAQ", title: "Что стоит уточнить перед покупкой." },
    faqItems: [{ question: "GrepFiles загружает мои файлы?", answer: "Нет. Поиск выполняется локально; запросы, пути и содержимое не отправляются." }, { question: "Можно делать массовую замену?", answer: "Да. Сначала поиск, затем предпросмотр, выбор файлов или совпадений и подтверждение." }, { question: "Можно экспортировать результаты?", answer: "Да. Markdown, CSV, JSON или текст, а также копирование текста, строк или путей с номерами строк." }, { question: "Можно искать только определённые типы?", answer: "Да. Добавьте расширения вроде `.swift`, `.md` или `.docx`. Пусто означает все читаемые текстовые файлы, не исключённые правилами." }],
    footer: { text: "Локальный поиск по файлам и безопасная замена для macOS.", top: "Наверх" }
  })
});

const aliases = {
  "zh-cn": "zh-Hans",
  "zh-sg": "zh-Hans",
  "zh-hans": "zh-Hans",
  "zh-tw": "zh-Hant",
  "zh-hk": "zh-Hant",
  "zh-mo": "zh-Hant",
  "zh-hant": "zh-Hant"
};

const supportedLanguages = Object.keys(translations);
let activeShot = "plain";
let activeLanguage = resolveInitialLanguage();

function buildLocale(locale) {
  return locale;
}

function galleryText(config) {
  return {
    tabsAria: config.tabsAria,
    tabs: config.tabs,
    items: {
      plain: { title: config.plainTitle, text: config.plainText, image: "assets/screenshots/plain-search.jpg", alt: `${config.altBase}: plain search` },
      regex: { title: config.regexTitle, text: config.regexText, image: "assets/screenshots/regex-search.jpg", alt: `${config.altBase}: regex search` },
      replace: { title: config.replaceTitle, text: config.replaceText, image: "assets/screenshots/replace-preview.jpg", alt: `${config.altBase}: replacement preview` },
      history: { title: config.historyTitle, text: config.historyText, image: "assets/screenshots/history.jpg", alt: `${config.altBase}: history` }
    }
  };
}

function resolveInitialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  const savedLanguage = window.localStorage.getItem("grepfiles-language");
  const browserLanguages = navigator.languages || [navigator.language];

  return normalizeLanguage(queryLanguage)
    || normalizeLanguage(savedLanguage)
    || browserLanguages.map(normalizeLanguage).find(Boolean)
    || "zh-Hans";
}

function normalizeLanguage(language) {
  if (!language) return null;
  if (supportedLanguages.includes(language)) return language;
  const lower = language.toLowerCase();
  if (aliases[lower]) return aliases[lower];
  const base = lower.split("-")[0];
  return supportedLanguages.includes(base) ? base : null;
}

function getValue(source, path) {
  return path.split(".").reduce((value, key) => value && value[key], source);
}

function applyTranslations(language) {
  const dictionary = translations[language] || translations["zh-Hans"];
  activeLanguage = language;
  document.documentElement.lang = language;
  document.title = dictionary.meta.title;

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.setAttribute("content", dictionary.meta.description);
  if (ogTitle) ogTitle.setAttribute("content", dictionary.meta.title);
  if (ogDescription) ogDescription.setAttribute("content", dictionary.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18nAriaLabel);
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-array]").forEach((element) => {
    const array = getValue(dictionary, element.dataset.i18nArray);
    const item = array && array[Number(element.dataset.i18nIndex)];
    if (!item) return;

    element.querySelectorAll("[data-i18n-field]").forEach((field) => {
      const value = item[field.dataset.i18nField];
      if (value) field.textContent = value;
    });

    element.querySelectorAll("[data-i18n-field-attr]").forEach((field) => {
      const attribute = field.dataset.i18nFieldAttr;
      const value = item[attribute];
      if (value) field.setAttribute(attribute, value);
    });
  });

  document.querySelectorAll("[data-i18n-list]").forEach((element) => {
    const list = getValue(dictionary, element.dataset.i18nList);
    const value = list && list[Number(element.dataset.i18nIndex)];
    if (value) element.textContent = value;
  });

  document.querySelectorAll(".purchase-link").forEach((link) => {
    link.href = `mailto:1056218492@qq.com?subject=${encodeURIComponent(dictionary.mailSubject)}`;
  });

  const selector = document.querySelector("#language-select");
  if (selector) selector.value = language;

  updateGallery(activeShot, dictionary);
}

function updateGallery(shot, dictionary = translations[activeLanguage]) {
  const item = dictionary.gallery.items[shot] || dictionary.gallery.items.plain;
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery || !item) return;

  activeShot = shot;
  const title = gallery.querySelector("[data-gallery-title]");
  const text = gallery.querySelector("[data-gallery-text]");
  const image = gallery.querySelector("[data-gallery-image]");

  if (title) title.textContent = item.title;
  if (text) text.textContent = item.text;
  if (image) {
    image.src = item.image;
    image.alt = item.alt;
  }

  gallery.querySelectorAll(".gallery-tab").forEach((tab) => {
    const isCurrent = tab.dataset.shot === shot;
    tab.classList.toggle("is-active", isCurrent);
    tab.setAttribute("aria-selected", String(isCurrent));
  });
}

function rememberLanguage(language) {
  window.localStorage.setItem("grepfiles-language", language);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState({}, "", url);
}

document.querySelectorAll(".gallery-tab").forEach((tab) => {
  tab.addEventListener("click", () => updateGallery(tab.dataset.shot));
});

const languageSelect = document.querySelector("#language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    const language = normalizeLanguage(event.target.value) || "zh-Hans";
    rememberLanguage(language);
    applyTranslations(language);
  });
}

applyTranslations(activeLanguage);
