// Auto-synced from archive-exams.js by tools/fill-social-gaps follow-up.
window.GEOGRAPHY_ANALYSIS = (() => {
  const primaryUnits =   {
      "106": [
          15,
          15,
          12,
          17,
          5,
          7,
          19,
          20,
          16,
          16,
          1,
          1,
          1,
          1,
          1,
          1,
          11,
          11,
          1,
          1
      ],
      "107": [
          15,
          5,
          12,
          13,
          17,
          14,
          9,
          13,
          16,
          8,
          12,
          1,
          16,
          1,
          1,
          1,
          1,
          1,
          11
      ],
      "108": [
          7,
          14,
          4,
          16,
          6,
          3,
          7,
          16,
          16,
          1,
          16,
          12,
          1,
          5,
          1,
          1,
          1
      ],
      "109": [
          9,
          7,
          12,
          3,
          5,
          8,
          19,
          16,
          16,
          2,
          7,
          16,
          1,
          5,
          7,
          1,
          1,
          1,
          1
      ],
      "110": [
          6,
          10,
          9,
          15,
          3,
          18,
          16,
          16,
          15,
          13,
          16,
          5,
          8,
          1,
          4,
          11
      ],
      "111": [
          14,
          6,
          13,
          7,
          12,
          6,
          16,
          1,
          1,
          1,
          1,
          1,
          1
      ],
      "112": [
          7,
          7,
          17,
          11,
          16,
          9,
          16,
          13,
          16,
          6,
          13,
          2,
          16,
          16,
          1
      ],
      "113": [
          7,
          6,
          20,
          3,
          14,
          16,
          16,
          1,
          16,
          1,
          1,
          12,
          1,
          12
      ],
      "114": [
          5,
          8,
          16,
          15,
          17,
          6,
          16,
          5,
          1,
          1,
          15
      ],
      "115": [
          6,
          5,
          17,
          10,
          3,
          13,
          9,
          7,
          4,
          16,
          17
      ]
  };
  const officialByYear =   {
      "106": {
          "count": 20,
          "abilities": {
              "knowledge": 5,
              "comprehension": 13,
              "inquiry": 2
          }
      },
      "107": {
          "count": 19,
          "abilities": {
              "knowledge": 5,
              "comprehension": 12,
              "inquiry": 2
          }
      },
      "108": {
          "count": 17,
          "abilities": {
              "knowledge": 4,
              "comprehension": 11,
              "inquiry": 2
          }
      },
      "109": {
          "count": 19,
          "abilities": {
              "knowledge": 5,
              "comprehension": 12,
              "inquiry": 2
          }
      },
      "110": {
          "count": 16,
          "abilities": {
              "knowledge": 4,
              "comprehension": 10,
              "inquiry": 2
          }
      },
      "111": {
          "count": 13,
          "abilities": {
              "knowledge": 3,
              "comprehension": 8,
              "inquiry": 2
          }
      },
      "112": {
          "count": 15,
          "abilities": {
              "knowledge": 4,
              "comprehension": 10,
              "inquiry": 1
          }
      },
      "113": {
          "count": 14,
          "abilities": {
              "knowledge": 4,
              "comprehension": 9,
              "inquiry": 1
          }
      },
      "114": {
          "count": 11,
          "abilities": {
              "knowledge": 3,
              "comprehension": 7,
              "inquiry": 1
          }
      },
      "115": {
          "count": 11,
          "abilities": {
              "knowledge": 3,
              "comprehension": 7,
              "inquiry": 1
          }
      }
  };
  const domainByUnit = Object.fromEntries(
    window.GEOGRAPHY_DATA.units.map(unit => [unit.id, unit.domain])
  );
  return { officialByYear, primaryUnits, domainByUnit };
})();
