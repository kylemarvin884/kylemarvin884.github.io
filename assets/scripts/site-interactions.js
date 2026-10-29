/* global config, Typed, swal */

document.addEventListener("DOMContentLoaded", () => {
    const announcements = config.content.pageHead.announcements || [];
    const announcementEl = document.getElementById("typed-announcement");
    if (announcementEl && announcements.length) {
        if (typeof Typed === "function" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            new Typed("#typed-announcement", {
                strings: announcements,
                typeSpeed: 50,
                backSpeed: 35,
                backDelay: 2200,
                loop: true,
            });
        } else {
            announcementEl.textContent = announcements[0];
        }
    }

    const search = document.getElementById("search-input");
    search?.addEventListener("input", () => {
        const query = search.value.trim().toLocaleLowerCase();
        document.querySelectorAll(".card-item").forEach(card => {
            card.hidden = !card.textContent.toLocaleLowerCase().includes(query);
        });
    });

    const topButton = document.getElementById("back-to-top");
    const updateTopButton = () => {
        if (topButton) topButton.style.display = window.scrollY > 200 ? "block" : "none";
    };
    window.addEventListener("scroll", updateTopButton, { passive: true });
    topButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    updateTopButton();

    document.getElementById("copy-link")?.addEventListener("click", async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(window.location.href);
            } else {
                const input = document.createElement("input");
                input.value = window.location.href;
                document.body.appendChild(input);
                input.select();
                const copied = document.execCommand("copy");
                input.remove();
                if (!copied) throw new Error("Copy is unavailable");
            }
            if (typeof swal === "function") swal("已复制", "网站链接已复制到剪贴板", "success");
        } catch (error) {
            console.error("无法复制网站链接", error);
            if (typeof swal === "function") swal("复制失败", "请手动复制地址栏中的链接", "warning");
        }
    });
});

window.addEventListener("load", () => {
    window.setTimeout(() => {
        const loader = document.getElementById("global-loader-iframe");
        if (loader) loader.className = "end";
        document.body.style.overflow = "";
    }, 350);
});
