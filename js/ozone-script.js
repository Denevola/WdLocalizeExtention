    (function () {
        if (typeof OZONE == "function") {
            try {
                var ozone_show = OZONE.dialogs.Base.prototype.show;
                console.log("OZONEの読み込みが完了しました。ダイアログの日本語化を行います。");
                OZONE.dialogs.Base.prototype.show = function () {
                    switch (this.content) {
                        case "Saving page...":
                            this.content = "ページを保存中...";
                            break;
                        case "Page saved!":
                            this.content = "ページを保存しました";
                            break;
                        case "Saving tags...":
                            this.content = "タグを保存中...";
                            break;
                        case "Tags saved!":
                            this.content = "タグを保存しました";
                            break;
                        default:
                            break;
                    }
                    ozone_show.apply(this, arguments);
                }
            } catch (e) {
                console.log("ダイアログの日本語化に失敗しました。");
            }
        } else {
            console.log("OZONEが読み込まれていません。")
            return setTimeout(arguments.callee, 1000);
        }
    })();
