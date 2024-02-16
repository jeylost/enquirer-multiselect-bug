import Enquirer from 'enquirer';

new Enquirer.prompts.MultiSelect({
  name: 'test-multiselect-bug',
  hint: '(Use <space> to select, <return> to submit)',
  message: 'Please select from list file:',
  choices: [
    {
      "name": "baz/",
      choices: [
        {
          "name": "foo/",
          choices: [
            {
              "name": "bar/",
              "choices": [
                {
                  "name": "bar",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "foo/",
      "choices": [
        {
          "name": "bar/",
          choices: [ {
            "name": "bar",
          },
        ]
        }
      ]
    },
  ],
  result(choices) {
    return this.map(choices);
  },
  validate(value) {
    if (value.length) {
      return true;
    }

    return 'Failed.';
  },
}).run();
