import { NextResponse } from "next/server";
import { fetchPinnedRepos, GithubError } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await fetchPinnedRepos();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof GithubError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
