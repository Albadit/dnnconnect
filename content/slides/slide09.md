# Slide 9 — NewsletterController.cs

```csharp
/// <summary>Invokes the newsletter view control and returns the Razor module result.</summary>
/// <returns>An <see cref="IRazorModuleResult"/> representing the rendered view.</returns>
public override IRazorModuleResult Invoke()
{
    try
    {
        var model = CreateModel();
        return View(model);
    }
    catch (Exception ex)
    {
        Exceptions.LogException(ex);
        return Error("Newsletter Error", ex.Message);
    }
}
```
