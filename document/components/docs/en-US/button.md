## Button

`Button` provides various types, styles, states and icons.

### Example

- Button type

  The default type is `button`, and you can set that to `submit` in form.

  ```html
  <lin-button>Button</lin-button>
  <lin-button type="submit">Submit Button</lin-button>
  ```

- Button state

  Default is normal, can be set to active or disabled state.

  ```html
  <lin-button :active="true">Active Button</lin-button>
  <lin-button :disabled="true">Disabled Button</lin-button>
  ```

- Icon

  You can set the class of `icon`.

  ```html
  <lin-button icon="lin-right">Button With Icon</lin-button>
  ```

- Style

  You can set attributes like `light`, `inline`, `outline`, and `primary` to change the button's style.

  ```html
  <lin-button :light="true">Light Button</lin-button>
  <lin-button :inline="true">Inline Button</lin-button>
  <lin-button :outline="true">Outline Button</lin-button>
  <lin-button :primary="true">Primary Button</lin-button>
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| type | Button type | String | button/submit | button |
| active | active state | Boolean | true/false | false |
| disabled | disabled state | Boolean | true/false | false |
| icon | Icon | String | the class of icon | - |
| light | light style | Boolean | true/false | false |
| inline | whether inline | Boolean | true/false | false |
| outline | outline style | Boolean | true/false | false |
| primary | primary style | Boolean | true/false | false |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| click | triggers when the button is clicked. If in disabled state, then it won't trigger | e - event target |
