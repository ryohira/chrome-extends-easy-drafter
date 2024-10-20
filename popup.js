document.addEventListener("DOMContentLoaded", function () {
  let timeoutId_success;
  let timeoutId_failed;

  document.getElementById("copyButton").addEventListener("click", function () {
    const textarea = document.getElementById("notepad");
    textarea.select(); // テキストエリアの内容を選択
    document.execCommand("copy"); // 旧ブラウザ向けの方法（バックアップ）

    // モダンブラウザ向けのクリップボードAPIを使用
    navigator.clipboard
      .writeText(textarea.value)
      .then(() => {
        const success = document.querySelector("#copySuccess");
        console.log(timeoutId_success);
        if (timeoutId_success) {
          clearTimeout(timeoutId_success);
        }
        success.style.display = "block";
        timeoutId_success = setTimeout(() => {
          success.style.display = "none";
        }, 2000);
      })
      .catch((err) => {
        const failed = document.querySelector("#copySuccess");
        console.log(timeoutId_failed);
        if (timeoutId_failed) {
          clearTimeout(timeoutId_failed);
        }
        failed.style.display = "block";
        timeoutId_failed = setTimeout(() => {
          failed.style.display = "none";
        }, 2000);
      });
  });

  document.getElementById("clearButton").addEventListener("click", function () {
    const textarea = document.getElementById("notepad");
    textarea.value = "";
  });
});
