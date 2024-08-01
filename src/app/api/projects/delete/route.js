export async function DELETE(req) {
  const title = await req.json();
  try {
    await Project.deleteOne({ title });
    return Response.json({ message: 'project deleted' });
  } catch (error) {
    console.log(error);
  }
}
