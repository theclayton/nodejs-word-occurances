module.exports = `
WORD COUNT Help

How to use:

1. Link module to be able to run cli command.
   npm link

2. Run command and specify a file.
   word-count -p example.txt

3. Word occurance output will display in order of highest to lowest as follows:
┌─────────┬───────────┬────────────┐
│ (index) │   word    │ ocurrences │
├─────────┼───────────┼────────────┤
│    0    │   'IS'    │     2      │
│    1    │ 'EXAMPLE' │     2      │
│    2    │  'FILE'   │     2      │
│    3    │  'THIS'   │     1      │
│    4    │   'AN'    │     1      │
│    5    │  'TEXT'   │     1      │
│    6    │   'FOR'   │     1      │
│    7    │ 'TESTING' │     1      │
│    8    │  'WORD'   │     1      │
│    9    │ 'COUNTS'  │     1      │
│   10    │ 'AGAINST' │     1      │
│   11    │   'IT'    │     1      │
│   12    │    'A'    │     1      │
│   13    │  'VERY'   │     1      │
│   14    │  'NICE'   │     1      │
└─────────┴───────────┴────────────┘

word-count
---------------------------------------------------------

Optional flags:

word-count [-p <path/to/dir>]
        Explicitly defines file path to be analyzed
        *example: word-count -p /usr/target/dir/file.txt
        
`;
