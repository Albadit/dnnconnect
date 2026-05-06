# Slide 8 — ConfigurePage()

```csharp
#region ConfigurePage
/// <summary>
/// Registers CSS, JS and AJAX support on the page.
/// Resources are registered here (not in Razor views) to avoid duplicates
/// when the module appears multiple times on a page.
/// </summary>
public void ConfigurePage(PageConfigurationContext context)
{
    // Enable AJAX anti-forgery and script support
    context.ServicesFramework.RequestAjaxAntiForgerySupport();
    context.ServicesFramework.RequestAjaxScriptSupport();

    // CSS stylesheets
    context.ClientResourceController
        .CreateStylesheet("~/DesktopModules/Admin/Newsletters/Resources/css/module.css")
        .Register();

    context.ClientResourceController
        .CreateStylesheet("~/DesktopModules/Admin/Newsletters/Resources/css/attachment-picker.css")
        .Register();

    // JavaScript files
    context.ClientResourceController
        .CreateScript("~/DesktopModules/Admin/Newsletters/Resources/js/edit.js")
        .Register();

    context.ClientResourceController
        .CreateScript("~/DesktopModules/Admin/Newsletters/Resources/js/attachment-picker.js")
        .Register();

    context.ClientResourceController
        .CreateScript("~/DesktopModules/Admin/Newsletters/Resources/js/newsletter.js")
        .Register();
}
#endregion
```
