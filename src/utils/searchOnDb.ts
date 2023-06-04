export default function searchOnDB (e: React.KeyboardEvent<HTMLInputElement> | null, input: string): void {
  if ((e && e.key === 'Enter') || (!e)) { // In case enter is pressed or search button is pressed.
    (e) ? e.preventDefault() : null;
    // TODO: Need to implement search on database script.
    console.log(input);
  }
}