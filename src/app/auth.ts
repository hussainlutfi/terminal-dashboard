import Swal from "sweetalert2";
import { createClient } from "../../utils/supabase/client";
import { LoginData } from "./../../interfaces/auth";

const supabase = createClient();

export async function isLogin() {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session) {
    return false;
  }
  return true;
}

export async function Login(params: LoginData) {
  const { data, error } = await supabase.auth.signInWithPassword(params);
  if (error) {
    return false;
  }

  return true;
}

export async function Logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return false;
  }

  return true;
}
