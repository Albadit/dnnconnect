# Slide 7 — CreateModel()

```csharp
private NewsletterViewModel CreateModel()
{
    var selectedLanguages = new List<string>();
    var locales = LocaleController.Instance.GetLocales(PortalSettings.PortalId);
    var rootFolder = FolderManager.Instance.GetFolder(PortalId, string.Empty);
    var rootFolderId = rootFolder?.FolderID ?? 0;

    return new NewsletterViewModel
    {
        ModuleId = ModuleId,
        From = CurrentUser?.Email ?? string.Empty,
        SendMethod = Constants.SendMethod.To,
        SendAction = Constants.SendAction.Asynchronous,
        Priority = Constants.Priority.Normal,
        ReplaceTokens = true,
        InitialEntries = GetInitialEntries(),
        LanguagesVisible = locales.Count > 1,
        SelectedLanguages = selectedLanguages,
        AvailableLanguages = locales
            .Select(locale => new NewsletterViewModel.LanguageOption
            {
                Value = locale.Key,
                Text = locale.Value.Text,
                Selected = selectedLanguages.Contains(locale.Key, StringComparer.OrdinalIgnoreCase),
            })
            .ToList(),
        Attachment = new AttachmentPickerModel
        {
            ModuleId = ModuleId,
            SelectedFolderId = rootFolderId,
            Folders = GetPortalFolders(),
            Files = GetFilesInFolder(rootFolderId),
        },
    };
}
```
