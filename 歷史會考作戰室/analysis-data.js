// Auto-synced from archive-exams.js by tools/fill-social-gaps follow-up.
window.HISTORY_ANALYSIS = (() => {
  const primaryUnits =   {
      "106": [
          6,
          12,
          10,
          3,
          16,
          12,
          9,
          15,
          16,
          1,
          15,
          1,
          1
      ],
      "107": [
          6,
          14,
          5,
          12,
          16,
          2,
          10,
          7,
          11,
          12,
          16,
          14,
          13,
          13,
          1,
          1
      ],
      "108": [
          12,
          12,
          1,
          14,
          15,
          5,
          12,
          2,
          12,
          15,
          3,
          16,
          1,
          1,
          1,
          14,
          9,
          1
      ],
      "109": [
          4,
          5,
          4,
          7,
          15,
          12,
          16,
          14,
          12,
          12,
          5,
          1,
          13,
          1,
          6,
          9,
          9
      ],
      "110": [
          1,
          5,
          12,
          9,
          16,
          14,
          16,
          4,
          11,
          6,
          14,
          12,
          13,
          13,
          13,
          15,
          1,
          12,
          12,
          13
      ],
      "111": [
          13,
          15,
          16,
          12,
          12,
          4,
          4,
          16,
          1,
          1
      ],
      "112": [
          12,
          7,
          16,
          3,
          4,
          15,
          5,
          12,
          13,
          12,
          16,
          9,
          14,
          5,
          11,
          4,
          15,
          13
      ],
      "113": [
          4,
          12,
          16,
          2,
          14,
          11,
          12,
          9,
          12,
          16,
          5,
          7,
          7,
          1,
          1
      ],
      "114": [
          10,
          12,
          9,
          2,
          8,
          13,
          15,
          14,
          12,
          16,
          1,
          1,
          1,
          12,
          1,
          1
      ],
      "115": [
          13,
          7,
          10,
          16,
          4,
          15,
          5,
          10,
          4,
          12,
          12,
          16,
          1,
          13,
          17,
          13
      ]
  };
  const officialByYear =   {
      "106": {
          "count": 13,
          "abilities": {
              "knowledge": 3,
              "comprehension": 8,
              "inquiry": 2
          }
      },
      "107": {
          "count": 16,
          "abilities": {
              "knowledge": 4,
              "comprehension": 10,
              "inquiry": 2
          }
      },
      "108": {
          "count": 18,
          "abilities": {
              "knowledge": 5,
              "comprehension": 12,
              "inquiry": 1
          }
      },
      "109": {
          "count": 17,
          "abilities": {
              "knowledge": 4,
              "comprehension": 11,
              "inquiry": 2
          }
      },
      "110": {
          "count": 20,
          "abilities": {
              "knowledge": 5,
              "comprehension": 13,
              "inquiry": 2
          }
      },
      "111": {
          "count": 10,
          "abilities": {
              "knowledge": 3,
              "comprehension": 7,
              "inquiry": 0
          }
      },
      "112": {
          "count": 18,
          "abilities": {
              "knowledge": 5,
              "comprehension": 12,
              "inquiry": 1
          }
      },
      "113": {
          "count": 15,
          "abilities": {
              "knowledge": 4,
              "comprehension": 10,
              "inquiry": 1
          }
      },
      "114": {
          "count": 16,
          "abilities": {
              "knowledge": 4,
              "comprehension": 10,
              "inquiry": 2
          }
      },
      "115": {
          "count": 16,
          "abilities": {
              "knowledge": 4,
              "comprehension": 10,
              "inquiry": 2
          }
      }
  };
  const domainByUnit = Object.fromEntries(
    window.HISTORY_DATA.units.map(unit => [unit.id, unit.domain])
  );
  return { officialByYear, primaryUnits, domainByUnit };
})();
