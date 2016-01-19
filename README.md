# Vacation Suggester

## Description

This exercise in jQuery is a single html document that shows/hides divs based upon text input to a form.

It leverages control flow in jQuery by branching conditionals dependent on strings captured from the html form. It matches these inputs to the additional classes which effectively act as *hash* tags for the hidden div.

## Bugs / Future Features

v.0.1 alpha

- jQuery logic intends to **&&** the strings together and return entries that apply to any search term. However, the branching exits after a single tag is satisfied.

- Additional branching logic will also be required to set conditions such as "match at least two terms before .show() is run".

- There are also unexplained failures to return tags that should match. For example Reykjavik will show when using 'cold' but will fail to match 'luxury' despite a matching class

- Branching was required in the project criteria but seems to be a very limiting way to manipulate this kind of query. This should probably be refactored in a way that grabs all variables in a single execution (perhaps as an array?)



Copyright (c) 2016 Brad Pizzimenti
Images (c) Creative Commons
