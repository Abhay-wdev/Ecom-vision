// app/not-found.js
import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('/'); // Redirects to the home page
}
