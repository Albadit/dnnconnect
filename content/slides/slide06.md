# Slide 6 — NewsletterController.cs

```csharp
/// <summary>Invokes the newsletter view.</summary>
/// <returns>The rendered view result.</returns>
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
