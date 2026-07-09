/** Per-question hand overrides (only when explanation has enough 中文). */
export const OVERRIDES = {
  "like-terms-combine": [
    ,,,, // v1–v4: cleanExpl
    {
      explanation:
        "ba 與 ab 只是字母順序不同，仍代表同一個乘積，所以 2ab、5ba、−ab 可以合併。係數為 2+5−1=6，因此化簡為 6ab。7ab 是忘記減掉最後的 ab；6a²b² 則把同類項合併誤當成字母相乘。",
      commonMistake: "看到 ba 就以為和 ab 不同類，導致少合併 5ba 這一項。",
    },
  ],
};
