# React drop down component for Nepal's political distribution. 🇳🇵 

### Installation

##### Using NPM:
 ```sh npm i rc-nepal-politics-drop-down ```

 #### Using yarn
```sh  yarn add rc-nepal-politics-drop-down ```

### Example and Demo
There is a storybook for the all the component in this packages.
  [Storybook Link]

### List of component in this packages.
| Component |  Detail |
| ------ | ------ |
|SelectDistrict| Dropdown for all Districts (जिल्ला) in nepal. |
|SelectMetropolitan| Dropdown for all Metropolitan(महानगरपालिका) in nepal. |
|SelectMunicipality| Dropdown for all Municipalities(नगरपालिका) in nepal. |
|SelectProvinces| Dropdown for all Provinces (प्रदेश) in nepal. |
|SelectRuralMetropolitan| Dropdown for all RuralMetropolitan (गाउँपालिका) in nepal. |
|SelectSubMetropolitan| Dropdown for all Sub Metropolitan in nepal. |


### Props and its default values.

| PropType | Default | Type | Detail |
| ------ | --- | --- |------ |
| lang | npl | String |Language for drop down list. Possible value is npl or en |
| isSearchable | false | Boolean | While true value can be search by typing. Note: Only work for en language.|
| aria-label | undefined | String | HTML 5 accessibility attributes |
| autofocus |undefined | Boolean | Will auto focus the drop down. |
| className |undefined | String| CSS Classname for drop-down wrapper. |
| hideSelectedOptions | false | Boolean| Useful for multi select. Selected value will remove from dropdown. |
| isMulti | false |Boolean | Can select multiple values from drop down. |
| minMenuHeight | undefined |Number| Minimum height of list in drop down. |
| maxMenuHeight |undefined |Number| Maximum height of the list after drop down is clicked. |
| menuShouldBlockScroll | false |Boolean| Will block scroll for mobile devices. Helpful for mobile devices only. |
| onBlur |undefined |Function| Function to invoke while field is blur. |
| onChange |undefined |Function| Hook for change event, |
| onFocus | undefined |Function| Hook for focus event. |
| onInputChange |undefined |Function| Hook for input change |
| onKeyDown |undefined |Function| Hook for key down. |
| onMenuOpen |undefined |Function| Hook when drop down menu open. |
| onMenuClose |undefined |Function| Hook when drop down menu close.|
| placeholder |default field name|String| Placeholder for the fields |

> This package is dependent on ``` react-select ``` as main dependency.


### Todo and remarks

  * Dependent drop down component. Example: After selecting districts it only shows relevant   municipalities or rural municipalities. [PR are Welcome]
  * Automatic Docs deployment [ DONE ✓ ]
  * Automatic NPM Deployment.






