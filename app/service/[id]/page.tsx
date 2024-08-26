import ServiceDetail from "@/components/Service/ServiceDetail";
import React from "react";

export default function ServiceDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return <ServiceDetail id={id} />;
}
