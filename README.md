# Test Task

This is a test task to create a web page with Todos and Photos functionality.

## Page Overview

### Home

The Home page (`/`) has two links: Photos and Todos. Clicking on these links will navigate to the corresponding routes `/todos` and `/photos` and their respective pages.

### Todos

- Todos can be added and deleted.
- Todos can be marked as "done", in which case they are moved to the end of the list, the checkbox is checked, and the text is crossed out. For example: "~~Buy some milk~~".
- The to-do list should persist even after the page reload (can use local storage).
- Clicking on a todo should open its page with the corresponding id in the route, for example: `todos/[todo_id]`.

### Photos

Flow:
1) The user visits the page.
2) User can enter an album id (a number from 1 to 100) in the input field.
3) User clicks the "Get photos" button, and the photos from the corresponding album are displayed.
   - URL for the request: `https://jsonplaceholder.typicode.com/photos?albumId=[album_id]`, where [album_id] is the number taken from the input.
   - When loading other albums, the photo list is overwritten.
   - After the page reloads, the photo list is empty.

Additional Requirements:
1. The text of the todo can be edited.
2. Add buttons for todo filtering: All, Todo, Done.
3. If the same `album_id` is entered in the input as the one that was loaded before, the "Get photos" button should be disabled (inactive).
