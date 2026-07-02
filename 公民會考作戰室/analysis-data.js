// Auto-synced from archive-exams.js by tools/fill-social-gaps follow-up.
window.CIVICS_ANALYSIS = (() => {
  const primaryUnits =   {
      "106": [
          3,
          3,
          8,
          20,
          20,
          6,
          10,
          15,
          7,
          13,
          11,
          13,
          7,
          14,
          1,
          8,
          10,
          3,
          10,
          17,
          1
      ],
      "107": [
          19,
          11,
          6,
          10,
          7,
          12,
          7,
          7,
          5,
          13,
          20,
          13,
          4,
          4,
          1,
          1,
          1,
          1,
          1,
          17
      ],
      "108": [
          9,
          6,
          20,
          7,
          7,
          11,
          13,
          11,
          3,
          3,
          10,
          11,
          11,
          13,
          13,
          4,
          7,
          1,
          18,
          1,
          1,
          4
      ],
      "109": [
          6,
          7,
          10,
          7,
          7,
          1,
          7,
          13,
          7,
          13,
          13,
          13,
          12,
          14,
          3,
          16,
          11,
          13,
          4,
          1,
          16,
          4,
          10,
          1
      ],
      "110": [
          13,
          8,
          2,
          10,
          15,
          13,
          7,
          13,
          7,
          13,
          13,
          4,
          2,
          13,
          17,
          4,
          19,
          6,
          1,
          6,
          1,
          10,
          1
      ],
      "111": [
          4,
          7,
          11,
          13,
          6,
          11,
          10,
          7,
          10,
          8,
          18,
          16,
          8,
          19,
          10,
          13,
          1,
          1,
          17,
          1,
          1
      ],
      "112": [
          6,
          6,
          3,
          17,
          17,
          10,
          19,
          13,
          7,
          3,
          14,
          7,
          2,
          18,
          5,
          1,
          1,
          17
      ],
      "113": [
          18,
          14,
          5,
          2,
          13,
          3,
          14,
          11,
          2,
          18,
          8,
          4,
          6,
          13,
          10,
          7,
          11,
          6,
          4,
          1,
          3
      ],
      "114": [
          3,
          3,
          3,
          6,
          13,
          20,
          12,
          16,
          9,
          16,
          2,
          14,
          8,
          4,
          16,
          8,
          4,
          1,
          16,
          17
      ],
      "115": [
          3,
          3,
          18,
          11,
          2,
          13,
          6,
          13,
          7,
          9,
          8,
          10,
          13,
          4,
          20,
          20,
          13,
          17,
          17,
          16,
          1
      ]
  };
  const officialByYear =   {
      "106": {
          "count": 21,
          "abilities": {
              "knowledge": 5,
              "comprehension": 14,
              "inquiry": 2
          }
      },
      "107": {
          "count": 20,
          "abilities": {
              "knowledge": 5,
              "comprehension": 13,
              "inquiry": 2
          }
      },
      "108": {
          "count": 22,
          "abilities": {
              "knowledge": 6,
              "comprehension": 14,
              "inquiry": 2
          }
      },
      "109": {
          "count": 24,
          "abilities": {
              "knowledge": 6,
              "comprehension": 16,
              "inquiry": 2
          }
      },
      "110": {
          "count": 23,
          "abilities": {
              "knowledge": 6,
              "comprehension": 15,
              "inquiry": 2
          }
      },
      "111": {
          "count": 21,
          "abilities": {
              "knowledge": 5,
              "comprehension": 14,
              "inquiry": 2
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
          "count": 21,
          "abilities": {
              "knowledge": 5,
              "comprehension": 14,
              "inquiry": 2
          }
      },
      "114": {
          "count": 20,
          "abilities": {
              "knowledge": 5,
              "comprehension": 13,
              "inquiry": 2
          }
      },
      "115": {
          "count": 21,
          "abilities": {
              "knowledge": 5,
              "comprehension": 14,
              "inquiry": 2
          }
      }
  };
  const domainByUnit = Object.fromEntries(
    window.CIVICS_DATA.units.map(unit => [unit.id, unit.domain])
  );
  return { officialByYear, primaryUnits, domainByUnit };
})();
