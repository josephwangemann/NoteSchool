import { NativeTabs } from "expo-router/unstable-native-tabs";
const TabLayout = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf="square.grid.2x2" />
        <NativeTabs.Trigger.Label>Chords</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="notes">
        <NativeTabs.Trigger.Icon sf="music.note" />
        <NativeTabs.Trigger.Label>Notes</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="pitches">
        <NativeTabs.Trigger.Icon sf="tuningfork" />
        <NativeTabs.Trigger.Label>Pitches</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabLayout;
