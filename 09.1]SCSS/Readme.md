# SCSS

- Nesting
    In SCSS , you can write selectors inside another selector.
    Example:
    ```scss
    main {
        section {
            h1 {
                color: black;
            }
        }
    }
    ```

    Output:
    ```css
    main section h1 {
        color: black;
    }
    ```

    This mimics the HTML structure , and makes it more readable and cleaner . 

- Mixins

    A mixin is a block of code that can be reused in different selectors .
    Small SCSS files (start with _) to split the code . example : _button.scss .    
    
    Example:
    ```scss
    @mixin flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```

    Output:
    ```css
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```

    helps to avoid repetition of code .
    can take arguments too .
    Example:
    ```scss
    @mixin flex-center($direction) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```

- Partials and Imports

    A partial is a SCSS file that contains a block of code that can be reused in different selectors .
    Example:
    ```scss
    @mixin flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```

    Output:
    ```css
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```

    helps to avoid repetition of code .
    can take arguments too .
    Example:
    ```scss
    @mixin flex-center($direction) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```

    in scss , we can import partials using @import "filename";
    Example:
    ```scss
    @import "filename";
    ```

    